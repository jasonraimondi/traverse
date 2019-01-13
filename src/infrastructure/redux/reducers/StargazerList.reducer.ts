import { UserEntity } from '@/models/User.entity';
import {
  ADD_USER_TO_STARGAZER_LIST_SUCCESS,
} from 'AddUserToStargazerListAction.ts';

const INITIAL_STATE = {};

export const stargazerListReducer = (state = INITIAL_STATE, action): { [id: string]: UserEntity } => {
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
