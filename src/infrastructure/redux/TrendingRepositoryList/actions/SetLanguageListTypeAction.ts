import { ListType } from '@/app/TrendingRepos/components/LanguageListPicker';
import { ActionResponse } from '../../Interfaces';

export const SET_LANGUAGE_LIST_TYPE = '[LANGUAGE LIST TYPE] Set';

export type SetLanguageListTypeActionType = (languageListType: ListType) => ActionResponse<string>;

export const SetLanguageListTypeAction: SetLanguageListTypeActionType = (languageListType: ListType) => {
  return {
    type: SET_LANGUAGE_LIST_TYPE,
    payload: languageListType,
  };
};
