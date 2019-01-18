import { trendingRepositoryListReducer } from '@/infrastructure/redux/reducers/TrendingRepositoryListReducer';
import { combineReducers } from 'redux';

import { currentStargazerReducer } from '@/infrastructure/redux/reducers/CurrentStargazer.reducer';
import { frequencyReducer } from '@/infrastructure/redux/reducers/Frequency.reducer';
import { githubAccessTokenReducer } from '@/infrastructure/redux/reducers/GithubAccessToken.reducer';
import { languageReducer } from '@/infrastructure/redux/reducers/Language.reducer';
import { languageListTypeReducer } from '@/infrastructure/redux/reducers/LanguageListType.reducer';
import { stargazerListReducer } from '@/infrastructure/redux/reducers/StargazerList.reducer';

export const rootReducer = combineReducers({
  language: languageReducer,
  frequency: frequencyReducer,
  repositoryList: trendingRepositoryListReducer,
  currentStargazer: currentStargazerReducer,
  stargazerList: stargazerListReducer,
  languageListType: languageListTypeReducer,
  githubAccessToken: githubAccessTokenReducer,
});
