import { ADD_USER_TO_STARGAZER_LIST_SUCCESS } from '@/infrastructure/redux/actions/AddUserToStargazerListAction';
import { REMOVE_USER_FROM_STARGAZER_LIST } from '@/infrastructure/redux/actions/RemoveUserFromStargazerListAction';
import { UserEntity } from '@/models/User.entity';

const INITIAL_STATE = {};

export interface StargazerListReducer {
  [id: string]: UserEntity;
}

export const stargazerListReducer = (state = INITIAL_STATE, action): StargazerListReducer => {
  switch (action.type) {
    case ADD_USER_TO_STARGAZER_LIST_SUCCESS:
      return {
        ...state,
        [action.payload.attributes.login]: action.payload,
      };
    case REMOVE_USER_FROM_STARGAZER_LIST:
      delete state[action.payload];
      return {
        ...state,
      };
    default:
      return state;
  }
};
