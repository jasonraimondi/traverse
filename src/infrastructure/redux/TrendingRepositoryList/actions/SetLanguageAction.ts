import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { ActionResponse } from 'Interfaces.ts';

export const SET_LANGUAGE = '[LANGUAGE] Set';

export type SetLanguageActionType = (language: ILanguage) => ActionResponse<ILanguage>;

export const SetLanguageAction: SetLanguageActionType = (language: ILanguage) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};