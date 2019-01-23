import { flashMessage } from '@/app/FlashMessage/FlashMessage';
import { ActionResponse } from '@/infrastructure/redux/Interfaces';
import { UserEntity } from '@/models/User.entity';

export const SET_GITHUB_ACCESS_TOKEN = '[GITHUB ACCESS TOKEN] attempt to validate and set';
export const SET_GITHUB_ACCESS_TOKEN_SUCCESS = '[GITHUB ACCESS TOKEN] validate - success';
export const SET_GITHUB_ACCESS_TOKEN_FAILURE = '[GITHUB ACCESS TOKEN] validate - failure';

export type SetGithubAccessTokenActionType = (githubAccessToken: string) => ActionResponse<string>;

export const SetGithubAccessTokenAction: SetGithubAccessTokenActionType = (githubAccessToken: string) => {
  return {
    type: SET_GITHUB_ACCESS_TOKEN,
    payload: githubAccessToken,
  };
};

interface SetGithubAccessTokenSuccessFields {
  token: string;
  user: UserEntity;
}

export const SetGithubAccessTokenSuccessAction = (success: SetGithubAccessTokenSuccessFields) => {
  flashMessage.success('Token Saved');
  return {
    type: SET_GITHUB_ACCESS_TOKEN_SUCCESS,
    payload: success,
  };
};

export const SetGithubAccessTokenFailureAction: SetGithubAccessTokenActionType = (message: string) => {
  flashMessage.error(message);
  return {
    type: SET_GITHUB_ACCESS_TOKEN_FAILURE,
    payload: message,
  };
};
