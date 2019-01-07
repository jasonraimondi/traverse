import { IActionResponse } from '@/infrastructure/redux/action-response';

export const SET_GITHUB_ACCESS_TOKEN = '[GITHUB ACCESS TOKEN] attempt to validate and set';
export const SET_GITHUB_ACCESS_TOKEN_SUCCESS = '[GITHUB ACCESS TOKEN] validate - success';
export const SET_GITHUB_ACCESS_TOKEN_FAILURE = '[GITHUB ACCESS TOKEN] validate - failure';

export type SetGithubAccessTokenActionType = (githubAccessToken: string) => IActionResponse<string>;

export const SetGithubAccessTokenAction: SetGithubAccessTokenActionType = (githubAccessToken: string) => {
  return {
    type: SET_GITHUB_ACCESS_TOKEN,
    payload: githubAccessToken,
  };
};

export const SetGithubAccessTokenSuccessAction: SetGithubAccessTokenActionType = (githubAccessToken: string) => {
  return {
    type: SET_GITHUB_ACCESS_TOKEN_SUCCESS,
    payload: githubAccessToken,
  };
};

export const SetGithubAccessTokenFailureAction: SetGithubAccessTokenActionType = (message: string) => {
  return {
    type: SET_GITHUB_ACCESS_TOKEN_FAILURE,
    payload: message,
  };
};
