import { FETCH_TRENDING_REPOSITORY_LIST } from '@/infrastructure/redux/TrendingRepositoryList/actions/FetchTrendingRepositoryListAction';
import { RepositoryEntity } from '@/models/Repository.entity';

const INITIAL_STATE = {};

export interface RepositoryListReducer {
  [id: string]: RepositoryEntity;
}

export interface TrendingRepositoryListReducer {
  [language: string]: { [frequency: string]: RepositoryListReducer };
}

export const trendingRepositoryListReducer = (state = INITIAL_STATE, action): TrendingRepositoryListReducer => {
  switch (action.type) {
    case FETCH_TRENDING_REPOSITORY_LIST:
      return action.payload;
    default:
      return state;
  }
};
