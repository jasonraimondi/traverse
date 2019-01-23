import {
  ADD_USER_TO_STARGAZER_LIST,
  ADD_USER_TO_STARGAZER_LIST_SUCCESS,
} from '@/infrastructure/redux/Stargazer/actions/AddUserToStargazerListAction';
import { CLEAR_CURRENT_STARGAZER } from '@/infrastructure/redux/Stargazer/actions/ClearCurrentStargazerAction';
import {
  REMOVE_USER_FROM_STARGAZER_LIST,
} from '@/infrastructure/redux/Stargazer/actions/RemoveUserFromStargazerListAction';
import { SET_CURRENT_STARGAZER_SUCCESS } from '@/infrastructure/redux/Stargazer/actions/SetCurrentStargazerAction';
import { StargazerStore } from '@/infrastructure/redux/Stargazer/Store';

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
      return {
        ...state,
        currentUserLogin: action.payload,
      };
    case CLEAR_CURRENT_STARGAZER:
      const {currentUserLogin, ...updatedState} = state;
      return updatedState;
    case ADD_USER_TO_STARGAZER_LIST:
      return {
        ...state,
        repositoryList: {
          loading: true,
          loaded: true,
          list: {
            [action.payload.attributes.login]: action.payload,
          },
        },
      };
    case ADD_USER_TO_STARGAZER_LIST_SUCCESS:
      return {
        ...state,
        repositoryList: {
          loading: false,
          loaded: true,
          list: {
            [action.payload.attributes.login]: action.payload,
          },
        },
      };
    case REMOVE_USER_FROM_STARGAZER_LIST:
      const {list} = state.userList;
      if (list.hasOwnProperty(action.payload)) {
        delete state.userList.list[action.payload];
      }
      return {...state};
    default:
      return state;
  }
};
