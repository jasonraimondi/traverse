import { ADD_USER_TO_STARGAZER_LIST } from '@/infrastructure/redux/actions/AddUserToStagazerListAction';
import { UserEntity } from '@/models/User.entity';

const INITIAL_STATE = {};

export const stargazerListReducer = (state = INITIAL_STATE, action): { [id: string]: UserEntity } => {
  switch (action.type) {
    case ADD_USER_TO_STARGAZER_LIST:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
};
