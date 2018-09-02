import { combineReducers } from 'redux';

import { frequencyReducer } from './FrequencyReducer';

export const rootReducer = combineReducers({
  frequency: frequencyReducer,
});
