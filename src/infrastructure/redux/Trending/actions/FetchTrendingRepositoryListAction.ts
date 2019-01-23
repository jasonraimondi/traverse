import { flashMessage } from '@/app/FlashMessage/FlashMessage';
import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { ActionResponse } from '@/infrastructure/redux/Interfaces';
import { FrequencyType } from '@/models/Frequency.type';
import { RepositoryEntity } from '@/models/Repository.entity';

export const FETCH_TRENDING_REPOSITORY_LIST = '[TRENDING REPOSITORY LIST] fetch';
export const FETCH_TRENDING_REPOSITORY_LIST_SUCCESS = '[TRENDING REPOSITORY LIST] fetch - success';
export const FETCH_TRENDING_REPOSITORY_LIST_FAILURE = '[TRENDING REPOSITORY LIST] fetch - failure';

export interface FetchTrendingRepositoryListActionFields {
  frequency: FrequencyType;
  language: ILanguage;
}

export interface FetchTrendingRepositoryListActionSuccessFields extends FetchTrendingRepositoryListActionFields {
  data: RepositoryEntity[];
}

export type FetchTrendingRepositoryListActionType =
  (fields: FetchTrendingRepositoryListActionFields) => ActionResponse<FetchTrendingRepositoryListActionFields>;

export const FetchTrendingRepositoryListAction: FetchTrendingRepositoryListActionType = (fields) => {
  return {
    type: FETCH_TRENDING_REPOSITORY_LIST,
    payload: fields,
  };
};

export function FetchTrendingRepositoryListSuccessAction(
  fields: FetchTrendingRepositoryListActionSuccessFields,
): ActionResponse<FetchTrendingRepositoryListActionSuccessFields> {
  return {
    type: FETCH_TRENDING_REPOSITORY_LIST_SUCCESS,
    payload: fields,
  };
}

export function FetchTrendingRepositoryListFailureAction(message): ActionResponse<string> {
  flashMessage.error(message);
  return {
    type: FETCH_TRENDING_REPOSITORY_LIST_FAILURE,
    payload: message,
  };
}
