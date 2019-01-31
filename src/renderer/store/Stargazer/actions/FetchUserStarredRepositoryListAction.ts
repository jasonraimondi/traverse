import { RepositoryEntity } from '@/renderer/infrastructure/model/Repository.entity';
import { UserEntity } from '@/renderer/infrastructure/model/User.entity';
import { flashMessage } from '@/renderer/infrastructure/services/FlashMessage';
import { ActionResponse } from '@/renderer/store/Interfaces';

export const FETCH_USER_STARRED_REPOSITORY_LIST = '[STARGAZER_REPOSITORY_LIST] fetch';
export const FETCH_USER_STARRED_REPOSITORY_LIST_NO_ACTION = '[STARGAZER_REPOSITORY_LIST] fetch (no action required)';
export const FETCH_USER_STARRED_REPOSITORY_LIST_SUCCESS = '[STARGAZER_REPOSITORY_LIST] fetch success';
export const FETCH_USER_STARRED_REPOSITORY_LIST_FAILURE = '[STARGAZER_REPOSITORY_LIST] fetch failure';

export type FetchUserStarredRepositoryListActionType = (username: string) => ActionResponse<string>;

export const FetchUserStarredRepositoryListAction: FetchUserStarredRepositoryListActionType = (user) => {
  return {
    type: FETCH_USER_STARRED_REPOSITORY_LIST,
    payload: user,
  };
};

export const FetchUserStarredRepositoryListNoActionRequired = () => {
  return {
    type: FETCH_USER_STARRED_REPOSITORY_LIST_NO_ACTION,
    payload: null,
  };
};

export interface FetchUserStarredRepositoryListSuccessFields {
  user: UserEntity;
  stargazerRepositoryList: RepositoryEntity[];
}

export const FetchUserStarredRepositoryListSuccessAction = (fields: FetchUserStarredRepositoryListSuccessFields) => {
  return {
    type: FETCH_USER_STARRED_REPOSITORY_LIST_SUCCESS,
    payload: fields,
  };
};

export const FetchUserStarredRepositoryListFailureAction = (message: string) => {
  flashMessage.error(message);
  return {
    type: FETCH_USER_STARRED_REPOSITORY_LIST_FAILURE,
    payload: message,
  };
};
