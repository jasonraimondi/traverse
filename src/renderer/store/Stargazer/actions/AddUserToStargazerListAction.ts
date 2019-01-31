import { UserEntity } from '@/renderer/infrastructure/model/User.entity';
import { flashMessage } from '@/renderer/infrastructure/services/FlashMessage';
import { ActionResponse } from '@/renderer/store/Interfaces';

export const ADD_USER_TO_STARGAZER_LIST = '[STARGAZER_USER_LIST] fetch';
export const ADD_USER_TO_STARGAZER_LIST_NO_ACTION = '[STARGAZER_USER_LIST] fetch (no action required)';
export const ADD_USER_TO_STARGAZER_LIST_SUCCESS = '[STARGAZER_USER_LIST] fetch success';
export const ADD_USER_TO_STARGAZER_LIST_FAILURE = '[STARGAZER_USER_LIST] fetch failure';

export type AddUserToStargazerListActionType = (username: string) => ActionResponse<string>;

export const AddUserToStargazerListAction: AddUserToStargazerListActionType = (user) => {
  return {
    type: ADD_USER_TO_STARGAZER_LIST,
    payload: user,
  };
};
export const AddUserToStargazerListNoActionRequired = () => {
  return {
    type: ADD_USER_TO_STARGAZER_LIST_NO_ACTION,
    payload: null,
  };
};

export const AddUserToStargazerListSuccessAction = (user: UserEntity) => {
  return {
    type: ADD_USER_TO_STARGAZER_LIST_SUCCESS,
    payload: user,
  };
};

export const AddUserToStargazerListFailureAction = (message: string) => {
  flashMessage.error(message);
  return {
    type: ADD_USER_TO_STARGAZER_LIST_FAILURE,
    payload: message,
  };
};
