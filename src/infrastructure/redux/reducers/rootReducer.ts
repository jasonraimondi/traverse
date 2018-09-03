import { combineReducers } from 'redux';

import { frequencyReducer } from './FrequencyReducer';
import { languageReducer } from './LanguageReducer';

export const rootReducer = combineReducers({
  language: languageReducer,
  frequency: frequencyReducer,
});
