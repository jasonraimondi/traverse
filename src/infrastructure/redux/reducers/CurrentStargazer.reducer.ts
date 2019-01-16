import { CLEAR_CURRENT_STARGAZER } from '@/infrastructure/redux/actions/ClearCurrentStargazerAction';
import {
  SET_CURRENT_STARGAZER,
  SET_CURRENT_STARGAZER_SUCCESS,
} from '@/infrastructure/redux/actions/SetCurrentStargazerAction';
import { RepositoryEntity } from '@/models/Repository.entity';

const INITIAL_STATE = null;

export interface CurrentStargazerReducer {
  login: string;
  repositoryList: {
    [login: string]: RepositoryEntity,
  };
}

export const currentStargazerReducer = (state = INITIAL_STATE, action): CurrentStargazerReducer => {
  switch (action.type) {
    case SET_CURRENT_STARGAZER_SUCCESS:
      return action.payload;
    case CLEAR_CURRENT_STARGAZER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
