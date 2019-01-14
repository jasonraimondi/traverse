import { IActionResponse } from '@/infrastructure/redux/ActionResponse';

export const SET_CURRENT_STARGAZER = '[SET CURRENT_STARGAZER] set';

export type SetCurrentStargazerActionType = (login: string) => IActionResponse<string>;

export const SetCurrentStargazerAction: SetCurrentStargazerActionType = (user) => {
  return {
    type: SET_CURRENT_STARGAZER,
    payload: user,
  };
};
