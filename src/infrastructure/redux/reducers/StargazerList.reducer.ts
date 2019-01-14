import { ADD_USER_TO_STARGAZER_LIST_SUCCESS } from '@/infrastructure/redux/actions/AddUserToStargazerListAction';
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
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};
