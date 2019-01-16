import { flashMessage } from '@/infrastructure/FlashMessage';
import { IActionResponse } from '@/infrastructure/redux/ActionResponse';
import { CurrentStargazerReducer } from '@/infrastructure/redux/reducers/CurrentStargazer.reducer';

export const SET_CURRENT_STARGAZER = '[SET CURRENT_STARGAZER] set';
export const SET_CURRENT_STARGAZER_SUCCESS = '[SET CURRENT_STARGAZER] set success';
export const SET_CURRENT_STARGAZER_FAILURE = '[SET CURRENT_STARGAZER] set failure';

export type SetCurrentStargazerActionType = (login: string) => IActionResponse<string>;

export const SetCurrentStargazerAction: SetCurrentStargazerActionType = (user) => {
  return {
    type: SET_CURRENT_STARGAZER,
    payload: user,
  };
};

export const SetCurrentStargazerSuccessAction = (currentStargazerReducer: CurrentStargazerReducer) => {
  return {
    type: SET_CURRENT_STARGAZER_SUCCESS,
    payload: currentStargazerReducer,
  };
};

export function SetCurrentStargazerFailureAction(message): IActionResponse<string> {
  flashMessage.error(message);
  return {
    type: SET_CURRENT_STARGAZER_FAILURE,
    payload: message,
  };
}
