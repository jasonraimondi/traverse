import {
  ADD_USER_TO_STARGAZER_LIST,
  ADD_USER_TO_STARGAZER_LIST_SUCCESS,
} from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';
import { CLEAR_CURRENT_STARGAZER } from '@/renderer/store/Stargazer/actions/ClearCurrentStargazerAction';
import { REMOVE_USER_FROM_STARGAZER_LIST } from '@/renderer/store/Stargazer/actions/RemoveUserFromStargazerListAction';
import {
  SET_CURRENT_STARGAZER_SUCCESS,
} from '@/renderer/store/Stargazer/actions/SetCurrentStargazerAction';
import {
  AddUserToStargazerListReducer,
  AddUserToStargazerListSuccessReducer,
  ClearCurrentStargazerReducer,
  RemoveUserFromStargazerListReducer,
  SetCurrentStargazerSuccessReducer,
} from '@/renderer/store/Stargazer/Effect';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

export const STARGAZER_INITIAL_STATE: StargazerStore = {
  userList: {
    loading: false,
    loaded: false,
  },
  repositoryList: {
    loading: false,
    loaded: false,
  },
};

export const StargazerReducer = (state = STARGAZER_INITIAL_STATE, action): StargazerStore => {
  switch (action.type) {
    case SET_CURRENT_STARGAZER_SUCCESS:
      return SetCurrentStargazerSuccessReducer(state, action);
    case CLEAR_CURRENT_STARGAZER:
      return ClearCurrentStargazerReducer(state, action);
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
