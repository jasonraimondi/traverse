import { CLEAR_ERROR_MESSAGE } from '@/infrastructure/redux/actions/ClearErrorMessage.action';
import { SET_ERROR_MESSAGE } from '@/infrastructure/redux/actions/SetErrorMessage.action';

const INITIAL_STATE: string = null;

export const errorMessageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return action.payload;
    case CLEAR_ERROR_MESSAGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
