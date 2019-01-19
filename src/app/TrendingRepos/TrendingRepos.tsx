import { Title } from '@/app/elements/Base';
import { formatRoute, Routes } from '@/app/Routes';
import {
  SetCurrentStargazerAction,
  SetCurrentStargazerActionType,
} from '@/infrastructure/redux/actions/SetCurrentStargazerAction';
import { RepositoryListReducer } from '@/infrastructure/redux/reducers/TrendingRepositoryListReducer';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { RepositoryList } from '@/app/elements/RepositoryList';
import { EmptyTrendingRepositoryList } from '@/app/TrendingRepos/components/EmptyTrendingRepositoryList';
import { FrequencyPicker } from '@/app/TrendingRepos/components/FrequencyPicker';
import { ILanguage, LanguageList } from '@/app/TrendingRepos/components/LanguageList';
import { LanguageListPicker, ListType } from '@/app/TrendingRepos/components/LanguageListPicker';
import {
  FetchRepositoryListAction,
  FetchRepositoryListActionType,
} from '@/infrastructure/redux/actions/FetchRepositoryListAction';
import { SetFrequencyAction, SetFrequencyActionType } from '@/infrastructure/redux/actions/SetFrequencyAction';
import { SetLanguageAction, SetLanguageActionType } from '@/infrastructure/redux/actions/SetLanguageAction';
import {
  SetLanguageListTypeAction,
  SetLanguageListTypeActionType,
} from '@/infrastructure/redux/actions/SetLanguageListTypeAction';
import { themeConfig } from '@/infrastructure/styles/Theme';
import { FrequencyType } from '@/models/Frequency.type';

interface Props {
  history: any;
  trendingRepositoryList: RepositoryListReducer;
  frequency: FrequencyType;
  language: ILanguage;
  languageListType: ListType;
  SetLanguageAction: SetLanguageActionType;
  SetFrequencyAction: SetFrequencyActionType;
  SetLanguageListTypeAction: SetLanguageListTypeActionType;
  FetchRepositoryListAction: FetchRepositoryListActionType;
  SetCurrentStargazerAction: SetCurrentStargazerActionType;
}

interface State {
  selectedLanguageListType: ListType;
}

class App extends React.Component<Props, State> {
  private readonly ALL_LANGUAGES = require('@/infrastructure/data/all-languages.json');
  private readonly POPULAR_LANGUAGES = require('@/infrastructure/data/popular-languages.json');

  constructor(props) {
    super(props);
    this.handleSetFrequency = this.handleSetFrequency.bind(this);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
    this.handleSetLanguageList = this.handleSetLanguageList.bind(this);
    this.handleRollDice = this.handleRollDice.bind(this);
    this.handleStargazerClick = this.handleStargazerClick.bind(this);
    this.state = {
      selectedLanguageListType: props.languageListType,
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
  }

  handleSetLanguageList(listType: ListType) {
    this.props.SetLanguageListTypeAction(listType);
    this.setState({ selectedLanguageListType: listType });
  }

  handleStargazerClick(login: string) {
    this.props.SetCurrentStargazerAction(login);
    this.props.history.push(formatRoute(Routes.STARGAZER_DETAIL, { login }));
  }

  handleRollDice() {
    this.handleSetLanguage(this.randomLanguage);
  }

  private get useAllLanguageList() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber === 1;
  }

  private get randomLanguage(): ILanguage {
    const list = this.useAllLanguageList ? this.ALL_LANGUAGES : this.POPULAR_LANGUAGES;
    const randomKey = Math.floor(Math.random() * list.length);
    return list[randomKey];
  }

  private ucFirst(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }

  private filterLanguage(language: string): string {
    if (language === '') {
      return 'All Languages';
    }
    return language;
  }

  render() {
    return <>
      <Title>{this.filterLanguage(this.props.language.title)} | {this.ucFirst(this.props.frequency)}</Title>
      <Main>
        <NavContainer>
          <LanguageListPicker selected={this.state.selectedLanguageListType}
                              handleSetLanguageList={this.handleSetLanguageList}
                              onClickRoll={this.handleRollDice}
          />
          <FrequencyPicker frequency={this.props.frequency} handleSetFrequency={this.handleSetFrequency}/>
        </NavContainer>
        <LanguageListContainer id='language-container'>
          <LanguageList
            languageListType={this.state.selectedLanguageListType}
            selectedLanguage={this.props.language}
            popularLanguageList={this.POPULAR_LANGUAGES}
            allLanguageList={this.ALL_LANGUAGES}
            handleSetLanguage={this.handleSetLanguage}
          />
        </LanguageListContainer>
        <RepoListContainer>
          <RepositoryList trendingRepositoryList={this.props.trendingRepositoryList}
                          handleStargazerClick={this.handleStargazerClick}
                          emptyRepositoryList={
                            <EmptyTrendingRepositoryList frequency={this.props.frequency}
                                                         language={this.props.language}
                            />
                          }
          />
        </RepoListContainer>
      </Main>
    </>;
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    frequency: state.frequency,
    trendingRepositoryList: state.trendingRepositoryList,
    languageListType: state.languageListType,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SetLanguageAction,
      SetFrequencyAction,
      FetchRepositoryListAction,
      SetLanguageListTypeAction,
      SetCurrentStargazerAction,
    },
    dispatch,
  );
}

const Main = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 0;
  grid-template-areas:
    "nav nav"
    "sidebar content";
  grid-template-columns: 140px 1fr;
`;

const NavContainer = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 2px solid ${themeConfig.colors.black};
  background-color: ${themeConfig.colors.purple};
  & a:hover, button:hover {
    cursor: pointer;
  }
`;

const LanguageListContainer = styled.div`
  grid-area: sidebar;
  min-height: 0;
  overflow-y: auto;
  border-right: 2px solid ${themeConfig.colors.black};
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
