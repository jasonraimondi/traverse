import { IActionResponse } from '../action-response';

export const SET_LANGUAGE = '[LANGUAGE] Set';

export type SetLanguageActionType = (language: string) => IActionResponse<string>;

export const SetLanguageAction: SetLanguageActionType = (language: string) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
