import { flashMessage } from '@/renderer/infrastructure/services/FlashMessage';
import { UserEntity } from '@/renderer/model/User.entity';
import { ActionResponse } from '@/renderer/store/Interfaces';

export const ADD_USER_TO_STARGAZER_LIST = '[CURRENT_STARGAZER LIST] add user';
export const ADD_USER_TO_STARGAZER_LIST_SUCCESS = '[CURRENT_STARGAZER LIST] add user success';
export const ADD_USER_TO_STARGAZER_LIST_FAILURE = '[CURRENT_STARGAZER LIST] add user failure';

export type AddUserToStargazerListActionType = (username: string) => ActionResponse<string>;

export const AddUserToStargazerListAction: AddUserToStargazerListActionType = (user) => {
  return {
    type: ADD_USER_TO_STARGAZER_LIST,
    payload: user,
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
