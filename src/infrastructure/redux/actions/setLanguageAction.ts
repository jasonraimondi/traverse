import { IActionResponse } from '../action-response';

export const SET_LANGUAGE = '[LANGUAGE] Set Language';

export type SetLanguageType = (language: string) => IActionResponse<string>;

export const setLanguageAction: SetLanguageType = (language: string) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
