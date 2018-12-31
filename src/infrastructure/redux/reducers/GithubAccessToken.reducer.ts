import { SET_GITHUB_ACCESS_TOKEN } from '@/infrastructure/redux/actions/SetGithubAccessToken.action';

const INITIAL_STATE: string = '';

export const githubAccessTokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GITHUB_ACCESS_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
