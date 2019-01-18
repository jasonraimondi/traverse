import { FETCH_REPOSITORY_LIST_SUCCESS } from '@/infrastructure/redux/actions/FetchRepositoryListAction';
import { RepositoryEntity } from '@/models/Repository.entity';

const INITIAL_STATE = {};

export interface RepositoryListReducer {
  [id: string]: RepositoryEntity;
}

export const trendingRepositoryListReducer = (state = INITIAL_STATE, action): RepositoryListReducer => {
  switch (action.type) {
    case FETCH_REPOSITORY_LIST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
