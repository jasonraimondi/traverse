import { flashMessage } from '@/renderer/infrastructure/services/FlashMessage';
import { RepositoryEntity } from '@/renderer/model/Repository.entity';
import { UserEntity } from '@/renderer/model/User.entity';
import { ActionResponse } from '@/renderer/store/Interfaces';

export const SET_CURRENT_STARGAZER = '[SET CURRENT_STARGAZER] set';
export const SET_CURRENT_STARGAZER_SUCCESS = '[SET CURRENT_STARGAZER] set success';
export const SET_CURRENT_STARGAZER_FAILURE = '[SET CURRENT_STARGAZER] set failure';

export type SetCurrentStargazerActionType = (login: string) => ActionResponse<string>;

export const SetCurrentStargazerAction: SetCurrentStargazerActionType = (user) => {
  return {
    type: SET_CURRENT_STARGAZER,
    payload: user,
  };
};

export interface SetCurrentStargazerSuccessActionFields {
  repositoryList: RepositoryEntity[];
  user: UserEntity;
}

export const SetCurrentStargazerSuccessAction = (fields: SetCurrentStargazerSuccessActionFields) => {
  return {
    type: SET_CURRENT_STARGAZER_SUCCESS,
    payload: fields,
  };
};

export function SetCurrentStargazerFailureAction(message): ActionResponse<string> {
  flashMessage.error(message);
  return {
    type: SET_CURRENT_STARGAZER_FAILURE,
    payload: message,
  };
}
