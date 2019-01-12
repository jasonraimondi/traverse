import { IActionResponse } from '@/infrastructure/redux/ActionResponse';

export const CLEAR_GITHUB_ACCESS_TOKEN = '[GITHUB ACCESS TOKEN] Clear';

export type ClearGithubAccessTokenActionType = () => IActionResponse<string>;

export const ClearGithubAccessTokenAction: ClearGithubAccessTokenActionType = () => {
  return {
    type: CLEAR_GITHUB_ACCESS_TOKEN,
    payload: null,
  };
};
