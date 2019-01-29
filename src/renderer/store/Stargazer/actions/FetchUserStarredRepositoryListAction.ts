import { flashMessage } from '@/renderer/infrastructure/services/FlashMessage';
import { RepositoryEntity } from '@/renderer/model/Repository.entity';
import { UserEntity } from '@/renderer/model/User.entity';
import { ActionResponse } from '@/renderer/store/Interfaces';

export const FETCH_USER_STARRED_REPOSITORY_LIST = '[STARGAZER] fetch user starred repository';
export const FETCH_USER_STARRED_REPOSITORY_LIST_SUCCESS = '[STARGAZER] fetch user starred repository success';
export const FETCH_USER_STARRED_REPOSITORY_LIST_FAILURE = '[STARGAZER] fetch user starred repository failure';

export type FetchUserStarredRepositoryListActionType = (username: string) => ActionResponse<string>;

export const FetchUserStarredRepositoryListAction: FetchUserStarredRepositoryListActionType = (user) => {
  return {
    type: FETCH_USER_STARRED_REPOSITORY_LIST,
    payload: user,
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
