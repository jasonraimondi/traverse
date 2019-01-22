import { combineReducers } from 'redux';

import { TrendingRepositoryListReducer } from '@/infrastructure/redux/TrendingRepositoryList/Reducer';

export const rootReducer = combineReducers({
  trendingRepositoryList: TrendingRepositoryListReducer,
  // stargazerRepositoryList: stargazerRepositoryListReducer,
  // accessToken: accessTokenReducer,
});
