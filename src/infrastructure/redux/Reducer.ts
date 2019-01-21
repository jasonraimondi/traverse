import { TrendingRepositoryListReducer } from '@/infrastructure/redux/TrendingRepositoryList/Reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  trendingRepositoryList: TrendingRepositoryListReducer,
  stargazerRepositoryList: stargazerRepositoryListReducer,
  accessToken: accessTokenReducer,
});
