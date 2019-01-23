import { flashMessage } from '@/app/FlashMessage/FlashMessage';
import { ActionResponse } from '@/infrastructure/redux/Interfaces';

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

export const SetCurrentStargazerSuccessAction = (currentStargazerReducer) => {
  return {
    type: SET_CURRENT_STARGAZER_SUCCESS,
    payload: currentStargazerReducer,
  };
};

export function SetCurrentStargazerFailureAction(message): ActionResponse<string> {
  flashMessage.error(message);
  return {
    type: SET_CURRENT_STARGAZER_FAILURE,
    payload: message,
  };
}
