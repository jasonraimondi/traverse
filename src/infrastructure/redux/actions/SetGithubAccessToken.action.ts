import { IActionResponse } from '@/infrastructure/redux/action-response';

export const SET_GITHUB_ACCESS_TOKEN = '[GITHUB ACCESS TOKEN] Set';

export type SetGithubAccessTokenActionType = (githubAccessToken: string) => IActionResponse<string>;

export const SetGithubAccessTokenAction: SetGithubAccessTokenActionType = (githubAccessToken: string) => {
  return {
    type: SET_GITHUB_ACCESS_TOKEN,
    payload: githubAccessToken,
  };
};
