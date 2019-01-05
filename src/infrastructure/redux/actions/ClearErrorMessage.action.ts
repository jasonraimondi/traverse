import { IActionResponse } from '@/infrastructure/redux/action-response';

export const CLEAR_ERROR_MESSAGE = '[ERROR MESSAGE] Clear';

export type ClearErrorMessageActionType = () => IActionResponse<null>;

export const ClearErrorMessageAction: ClearErrorMessageActionType = () => {
  return {
    type: CLEAR_ERROR_MESSAGE,
    payload: null,
  };
};
