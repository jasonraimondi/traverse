import { ActionResponse } from 'Interfaces.ts';

export const CLEAR_GITHUB_ACCESS_TOKEN = '[GITHUB ACCESS TOKEN] Clear';

export type ClearGithubAccessTokenActionType = () => ActionResponse<string>;

export const ClearGithubAccessTokenAction: ClearGithubAccessTokenActionType = () => {
  return {
    type: CLEAR_GITHUB_ACCESS_TOKEN,
    payload: null,
  };
};
