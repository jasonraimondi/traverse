import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { IActionResponse } from '@/infrastructure/redux/ActionResponse';

export const SET_LANGUAGE = '[LANGUAGE] Set';

export type SetLanguageActionType = (language: ILanguage) => IActionResponse<ILanguage>;

export const SetLanguageAction: SetLanguageActionType = (language: ILanguage) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};
