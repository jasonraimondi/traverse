import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

import { TitleBar } from '@/app/TitleBar';
import { FrequencyPicker } from '@/app/TrendingRepos/FrequencyPicker';
import { ILanguage, LanguageList } from '@/app/TrendingRepos/LanguageList';
import { LanguageListPicker, ListType } from '@/app/TrendingRepos/LanguageListPicker';
import { RepositoryList } from '@/app/TrendingRepos/RepositoryList';
import {
  FetchRepositoryListAction,
  FetchRepositoryListActionType,
} from '@/infrastructure/redux/actions/FetchRepositoryList.action';
import { trackSetLanguage } from '@/infrastructure/github/AnalyticsTracker';
import { SetFrequencyAction, SetFrequencyActionType } from '@/infrastructure/redux/actions/SetFrequency.action';
import { SetLanguageAction, SetLanguageActionType } from '@/infrastructure/redux/actions/SetLanguage.action';
import { FrequencyType } from '@/models/Frequency.type';
import { RepositoryEntity } from '@/models/Repository.entity';

interface Props {
  repositoryList: { [id: string]: RepositoryEntity };
  frequency: FrequencyType;
  language: ILanguage;
  SetLanguageAction: SetLanguageActionType;
  SetFrequencyAction: SetFrequencyActionType;
  FetchRepositoryListAction: FetchRepositoryListActionType;
}

interface State {
  selectedLanguageListType: 'all' | 'popular';
}

class App extends React.Component<Props, State> {
  private readonly ALL_LANGUAGES = require('@/infrastructure/data/all-languages.json');
  private readonly POPULAR_LANGUAGES = require('@/infrastructure/data/popular-languages.json');

  constructor(props) {
    super(props);
    this.handleSetFrequency = this.handleSetFrequency.bind(this);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
    this.handleSetLanguageList = this.handleSetLanguageList.bind(this);
    this.state = {
      selectedLanguageListType: 'all',
    };
  }

  componentDidMount() {
    this.props.FetchRepositoryListAction({
      language: this.props.language,
      frequency: this.props.frequency,
    });
  }

  handleSetFrequency(frequency: FrequencyType) {
    this.props.SetFrequencyAction(frequency);
    this.props.FetchRepositoryListAction({
      language: this.props.language,
      frequency,
    });
  }

  handleSetLanguage(language: ILanguage) {
    this.props.SetLanguageAction(language);
    this.props.FetchRepositoryListAction({
      language,
      frequency: this.props.frequency,
    });
    trackSetLanguage(language.title);
  }

  handleSetLanguageList(listType: ListType) {
    this.setState({ selectedLanguageListType: listType });
  }

  render() {
    return (
      <>
        <Normalize/>
        <Main>
          <TitleContainer>
            <TitleBar frequency={this.props.frequency} language={this.props.language}/>
          </TitleContainer>
          <NavContainer>
            <LanguageListPicker selected={this.state.selectedLanguageListType}
                            handleSetLanguageList={this.handleSetLanguageList}
            />
            <FrequencyPicker frequency={this.props.frequency} handleSetFrequency={this.handleSetFrequency}/>
          </NavContainer>
          <LanguageListContainer id='language-container'>
            <LanguageList
              selectedLanguageListType={this.state.selectedLanguageListType}
              selectedLanguage={this.props.language}
              popularLanguageList={this.POPULAR_LANGUAGES}
              allLanguageList={this.ALL_LANGUAGES}
              handleSetLanguage={this.handleSetLanguage}
            />
          </LanguageListContainer>
          <RepoListContainer>
            <RepositoryList repositoryList={this.props.repositoryList}
                            language={this.props.language}
                            frequency={this.props.frequency}
            />
          </RepoListContainer>
        </Main>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    frequency: state.frequency,
    repositoryList: state.repositoryList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SetLanguageAction,
      SetFrequencyAction,
      FetchRepositoryListAction,
    },
    dispatch,
  );
}

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 0;
  grid-template-areas:
    "title title"
    "nav nav"
    "sidebar content";
  grid-template-rows: 43px 1fr;
  grid-template-columns: 175px 1fr;
`;

const TitleContainer = styled.div`
  grid-area: title;
  -webkit-app-region: drag;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
`;

const NavContainer = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 2px solid black;
`;

const LanguageListContainer = styled.div`
  grid-area: sidebar;
  min-height: 0;
  overflow-y: auto;
  border-right: 2px solid black;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
`;

const RepoListContainer = styled.div`
  grid-area: content;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

export default connect(mapStateToProps, mapDispatchToProps)(App);
