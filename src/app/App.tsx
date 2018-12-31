import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';

import { About } from '@/app/About/About';
import { TitleBar } from '@/app/TitleBar';
import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { ListType } from '@/app/TrendingRepos/components/LanguageListPicker';
import TrendingRepos from '@/app/TrendingRepos/TrendingRepos';
import {
  FetchRepositoryListAction,
  FetchRepositoryListActionType,
} from '@/infrastructure/redux/actions/FetchRepositoryList.action';
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
          <RouterOutlet>
            <Switch>
              <Route
                path='/'
                exact
                component={() => < TrendingRepos/>}/>
              <Route
                path='/about'
                component={() => < About/>}/>
            </Switch>
          </RouterOutlet>
          <NavigationContainer>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </NavigationContainer>
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
    "title"
    "content"
    "bottom-nav";
  grid-template-rows: 43px 1fr 43px;
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

const RouterOutlet = styled.div`
  overflow-y: auto;
  grid-area: content;
  background-color: tomato;
`;

const NavigationContainer = styled.div`
  grid-area: bottom-nav;
`;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
