import { ListType } from '@/app/TrendingRepos/components/LanguageListPicker';
import { IActionResponse } from '@/infrastructure/redux/action-response';

export const SET_LANGUAGE_LIST_TYPE = '[LANGUAGE LIST TYPE] Set';

export type SetLanguageListTypeActionType = (languageListType: ListType) => IActionResponse<string>;

export const SetLanguageListTypeAction: SetLanguageListTypeActionType = (languageListType: ListType) => {
  return {
    type: SET_LANGUAGE_LIST_TYPE,
    payload: languageListType,
  };
};
