import { SET_CURRENT_STARGAZER } from '@/infrastructure/redux/actions/SetCurrentStargazerAction';
import { UserEntity } from '@/models/User.entity';

const INITIAL_STATE = null;

export const currentStargazerReducer = (state = INITIAL_STATE, action): UserEntity => {
  switch (action.type) {
    case SET_CURRENT_STARGAZER:
      return action.payload;
    default:
      return state;
  }
};
