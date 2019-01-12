import { CLEAR_GITHUB_ACCESS_TOKEN } from '@/infrastructure/redux/actions/ClearGithubAccessTokenAction';
import { SET_GITHUB_ACCESS_TOKEN_SUCCESS } from '@/infrastructure/redux/actions/SetGithubAccessTokenAction';

const INITIAL_STATE: string = null;

export const githubAccessTokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GITHUB_ACCESS_TOKEN_SUCCESS:
      return action.payload;
    case CLEAR_GITHUB_ACCESS_TOKEN:
      return INITIAL_STATE;
    default:
      return state;
  }
};
