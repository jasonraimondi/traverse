import { combineReducers } from 'redux';

import { SettingsReducer } from '@/renderer/store/Settings/Reducer';
import { StargazerReducer } from '@/renderer/store/Stargazer/Reducer';
import { TrendingReducer } from '@/renderer/store/Trending/Reducer';

export const rootReducer = combineReducers({
  trending: TrendingReducer,
  stargazer: StargazerReducer,
  settings: SettingsReducer,
});
