import { CLEAR_CURRENT_STARGAZER } from '@/infrastructure/redux/actions/ClearCurrentStargazerAction';
import { SET_CURRENT_STARGAZER } from '@/infrastructure/redux/actions/SetCurrentStargazerAction';

const INITIAL_STATE = null;

export const currentStargazerReducer = (state = INITIAL_STATE, action): string => {
  switch (action.type) {
    case SET_CURRENT_STARGAZER:
      return action.payload;
    case CLEAR_CURRENT_STARGAZER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
