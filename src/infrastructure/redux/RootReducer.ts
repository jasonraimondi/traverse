import { combineReducers } from 'redux';

import { SettingsReducer } from '@/infrastructure/redux/Settings/Reducer';
import { StargazerReducer } from '@/infrastructure/redux/Stargazer/Reducer';
import { TrendingReducer } from '@/infrastructure/redux/Trending/Reducer';

export const rootReducer = combineReducers({
  trending: TrendingReducer,
  stargazer: StargazerReducer,
  settings: SettingsReducer,
});
