import { RepositoryEntity } from '@/models/Repository.entity';
import { FETCH_REPOSITORY_LIST_SUCCESS } from '@/infrastructure/redux/actions/FetchRepositoryList.action';

const INITIAL_STATE = {};

export const repositoryListReducer = (state = INITIAL_STATE, action): { [id: string]: RepositoryEntity } => {
  switch (action.type) {
    case FETCH_REPOSITORY_LIST_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
