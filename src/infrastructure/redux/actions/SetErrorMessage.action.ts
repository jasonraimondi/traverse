import { IActionResponse } from '@/infrastructure/redux/action-response';

export const SET_ERROR_MESSAGE = '[ERROR MESSAGE] Set';

export type SetErrorMessageActionType = (frequency: string) => IActionResponse<string>;

export const SetErrorMessageAction: SetErrorMessageActionType = (frequency: string) => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: frequency,
  };
};
