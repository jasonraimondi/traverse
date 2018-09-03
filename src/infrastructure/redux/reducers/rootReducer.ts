import { combineReducers } from 'redux';

import { frequencyReducer } from './FrequencyReducer';
import { languageReducer } from './LanguageReducer';
import { repositoryListReducer } from './RepositoryListReducer';

export const rootReducer = combineReducers({
  language: languageReducer,
  frequency: frequencyReducer,
  repositoryList: repositoryListReducer,
});
