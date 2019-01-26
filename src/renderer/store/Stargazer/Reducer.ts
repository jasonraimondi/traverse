import {
  ADD_USER_TO_STARGAZER_LIST,
  ADD_USER_TO_STARGAZER_LIST_SUCCESS,
} from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';
import { REMOVE_USER_FROM_STARGAZER_LIST } from '@/renderer/store/Stargazer/actions/RemoveUserFromStargazerListAction';
import {
  AddUserToStargazerListReducer,
  AddUserToStargazerListSuccessReducer,
  RemoveUserFromStargazerListReducer,
} from '@/renderer/store/Stargazer/Effect';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

export const STARGAZER_INITIAL_STATE: StargazerStore = {
  loading: false,
  loaded: false,
  list: {},
};

export const StargazerReducer = (state = STARGAZER_INITIAL_STATE, action): StargazerStore => {
  switch (action.type) {
    case ADD_USER_TO_STARGAZER_LIST:
      return AddUserToStargazerListReducer(state, action);
    case ADD_USER_TO_STARGAZER_LIST_SUCCESS:
      return AddUserToStargazerListSuccessReducer(state, action);
    case REMOVE_USER_FROM_STARGAZER_LIST:
      return RemoveUserFromStargazerListReducer(state, action);
    default:
      return state;
  }
};
