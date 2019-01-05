import { CLEAR_GITHUB_ACCESS_TOKEN } from '@/infrastructure/redux/actions/ClearGithubAccessToken.action';
import { SET_GITHUB_ACCESS_TOKEN } from '@/infrastructure/redux/actions/SetGithubAccessToken.action';

const INITIAL_STATE: string = null;

export const githubAccessTokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GITHUB_ACCESS_TOKEN:
      return action.payload;
    case CLEAR_GITHUB_ACCESS_TOKEN:
      return INITIAL_STATE;
    default:
      return state;
  }
};
