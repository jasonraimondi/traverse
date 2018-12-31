import { combineReducers } from 'redux';

import { frequencyReducer } from '@/infrastructure/redux/reducers/Frequency.reducer';
import { githubAccessTokenReducer } from '@/infrastructure/redux/reducers/GithubAccessToken.reducer';
import { languageReducer } from '@/infrastructure/redux/reducers/Language.reducer';
import { repositoryListReducer } from '@/infrastructure/redux/reducers/RepositoryList.reducer';

export const rootReducer = combineReducers({
  language: languageReducer,
  frequency: frequencyReducer,
  repositoryList: repositoryListReducer,
  githubAccessToken: githubAccessTokenReducer,
});
