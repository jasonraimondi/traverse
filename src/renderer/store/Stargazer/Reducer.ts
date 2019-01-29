import {
  SET_GITHUB_ACCESS_TOKEN_SUCCESS,
} from '@/renderer/store/Settings/actions/SetGithubAccessTokenAction';
import {
  ADD_USER_TO_STARGAZER_LIST,
  ADD_USER_TO_STARGAZER_LIST_SUCCESS,
} from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';
import {
  FETCH_USER_STARRED_REPOSITORY_LIST_SUCCESS,
} from '@/renderer/store/Stargazer/actions/FetchUserStarredRepositoryListAction';
import { REMOVE_USER_FROM_STARGAZER_LIST } from '@/renderer/store/Stargazer/actions/RemoveUserFromStargazerListAction';
import {
  AddUserToStargazerListReducer,
  AddUserToStargazerListSuccessReducer, FetchUserStarredRepositoryListSuccessReducer,
  RemoveUserFromStargazerListReducer, SetAuthUserStargazerSuccessReducer,
} from '@/renderer/store/Stargazer/Effect';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

export const STARGAZER_INITIAL_STATE: StargazerStore = {
  loading: false,
  loaded: false,
  stargazerList: {},
  repositoryList: {},
};

export const StargazerReducer = (state = STARGAZER_INITIAL_STATE, action): StargazerStore => {
  switch (action.type) {
    case SET_GITHUB_ACCESS_TOKEN_SUCCESS:
      return SetAuthUserStargazerSuccessReducer(state, action);
    case ADD_USER_TO_STARGAZER_LIST:
      return AddUserToStargazerListReducer(state, action);
    case ADD_USER_TO_STARGAZER_LIST_SUCCESS:
      return AddUserToStargazerListSuccessReducer(state, action);
    case FETCH_USER_STARRED_REPOSITORY_LIST_SUCCESS:
      return FetchUserStarredRepositoryListSuccessReducer(state, action);
    case REMOVE_USER_FROM_STARGAZER_LIST:
      return RemoveUserFromStargazerListReducer(state, action);
    default:
      return state;
  }
};
