import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { EmptyTrendingRepositoryList } from '@/renderer/app/TrendingRepos/components/EmptyTrendingRepositoryList';
import { FrequencyPicker } from '@/renderer/app/TrendingRepos/components/FrequencyPicker';
import { ILanguage, LanguageList } from '@/renderer/app/TrendingRepos/components/LanguageList';
import { LanguageListPicker, ListType } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { Title } from '@/renderer/elements/Base';
import { RepositoryList } from '@/renderer/elements/RepositoryList';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import { FrequencyType } from '@/renderer/model/Frequency.type';
import { RepositoryEntity } from '@/renderer/model/Repository.entity';
import { formatRoute, Routes } from '@/renderer/Routes';
import { TrackUpdateSource } from '@/renderer/store/Interfaces';
import {
  FetchTrendingRepositoryListAction,
  FetchTrendingRepositoryListActionType,
} from '@/renderer/store/Trending/actions/FetchTrendingRepositoryListAction';
import { SetFrequencyAction, SetFrequencyActionType } from '@/renderer/store/Trending/actions/SetFrequencyAction';
import { SetLanguageAction, SetLanguageActionType } from '@/renderer/store/Trending/actions/SetLanguageAction';
import {
  SetLanguageListTypeAction,
  SetLanguageListTypeActionType,
} from '@/renderer/store/Trending/actions/SetLanguageListTypeAction';
import { TrendingStore } from '@/renderer/store/Trending/Store';

interface Props {
  history: any;
  trending: TrendingStore;
  SetLanguageAction: SetLanguageActionType;
  SetFrequencyAction: SetFrequencyActionType;
  SetLanguageListTypeAction: SetLanguageListTypeActionType;
  FetchTrendingRepositoryListAction: FetchTrendingRepositoryListActionType;
}

interface State {
  selectedLanguageListType: ListType;
}

class App extends React.Component<Props, State> {
  private readonly ALL_LANGUAGES = require('@/data/all-languages.json');
  private readonly POPULAR_LANGUAGES = require('@/data/popular-languages.json');

  constructor(props: Props) {
    super(props);
    this.handleSetFrequency = this.handleSetFrequency.bind(this);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
    this.handleSetLanguageList = this.handleSetLanguageList.bind(this);
    this.handleRollDice = this.handleRollDice.bind(this);
    this.handleStargazerClick = this.handleStargazerClick.bind(this);
    this.state = {
      selectedLanguageListType: this.props.trending.options.list,
    };
  }

  componentDidMount() {
    this.props.FetchTrendingRepositoryListAction({
      language: this.props.trending.options.language,
      frequency: this.props.trending.options.frequency,
    });
  }

  handleSetFrequency(frequency: FrequencyType) {
    this.props.SetFrequencyAction(frequency);
    this.props.FetchTrendingRepositoryListAction({
      language: this.language,
      frequency,
    });
  }

  handleSetLanguage(language: ILanguage) {
    this.props.SetLanguageAction(language);
    this.props.FetchTrendingRepositoryListAction({
      language,
      frequency: this.frequency,
    });
  }

  handleSetLanguageList(listType: ListType) {
    this.props.SetLanguageListTypeAction(listType);
    this.setState({selectedLanguageListType: listType});
  }

  handleStargazerClick(login: string) {
    this.props.history.push(formatRoute(Routes.STARGAZER_DETAIL, {login}));
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

  get frequency() {
    return this.props.trending.options.frequency;
  }

  get language() {
    return this.props.trending.options.language;
  }

  get selectedTrend(): TrackUpdateSource<RepositoryEntity[]> | false {
    const {repositoryList} = this.props.trending;
    if (repositoryList
      && repositoryList[this.language.value]
      && repositoryList[this.language.value][this.frequency]
    ) {
      return repositoryList[this.language.value][this.frequency];
    }
    return false;
  }

  get trendingRepositoryList(): RepositoryEntity[] {
    return this.selectedTrend ? this.selectedTrend.data : [];
  }

  render() {
    return <>
      <Title>{this.filterLanguage(this.language.title)} | {this.ucFirst(this.frequency)}</Title>
      <Main>
        <NavContainer>
          <LanguageListPicker selected={this.state.selectedLanguageListType}
                              handleSetLanguageList={this.handleSetLanguageList}
                              onClickRoll={this.handleRollDice}
          />
          <FrequencyPicker frequency={this.frequency} handleSetFrequency={this.handleSetFrequency}/>
        </NavContainer>
        <LanguageListContainer id='language-container'>
          <LanguageList
            languageListType={this.state.selectedLanguageListType}
            selectedLanguage={this.language}
            popularLanguageList={this.POPULAR_LANGUAGES}
            allLanguageList={this.ALL_LANGUAGES}
            handleSetLanguage={this.handleSetLanguage}
          />
        </LanguageListContainer>
        <RepoListContainer>
          <RepositoryList
            lastUpdatedAt={this.selectedTrend ? new Date(this.selectedTrend.lastUpdated) : null}
            repositoryList={this.trendingRepositoryList}
            handleStargazerClick={this.handleStargazerClick}
            emptyRepositoryList={
              <EmptyTrendingRepositoryList
                frequency={this.frequency}
                language={this.language}
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
    trending: state.trending,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SetLanguageAction,
      SetFrequencyAction,
      FetchTrendingRepositoryListAction,
      SetLanguageListTypeAction,
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
  height: 46px;
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
