import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { flashMessage } from '@/infrastructure/FlashMessage';
import { IActionResponse } from '@/infrastructure/redux/ActionResponse';
import { FrequencyType } from '@/models/Frequency.type';
import { RepositoryEntity } from '@/models/Repository.entity';

export const FETCH_REPOSITORY_LIST = '[REPOSITORY LIST] fetch';
export const FETCH_REPOSITORY_LIST_SUCCESS = '[REPOSITORY LIST] fetch - success';
export const FETCH_REPOSITORY_LIST_FAILURE = '[REPOSITORY LIST] fetch - failure';

export interface FetchRepositoryListActionFields {
  frequency: FrequencyType;
  language: ILanguage;
}

export type FetchRepositoryListActionType =
  (fields: FetchRepositoryListActionFields) => IActionResponse<FetchRepositoryListActionFields>;

export const FetchRepositoryListAction: FetchRepositoryListActionType = (fields) => {
  return {
    type: FETCH_REPOSITORY_LIST,
    payload: fields,
  };
};

export function FetchRepositoryListSuccessAction(
  data: RepositoryEntity[],
): IActionResponse<{ [id: string]: RepositoryEntity }> {
  return {
    type: FETCH_REPOSITORY_LIST_SUCCESS,
    payload: data.reduce(listByIdsReducer, {}),
  };
}

export function FetchRepositoryListFailureAction(message): IActionResponse<string> {
  flashMessage.error(message);
  return {
    type: FETCH_REPOSITORY_LIST_FAILURE,
    payload: message,
  };
}

const listByIdsReducer = (entities, currentItem: RepositoryEntity) => {
  return {
    ...entities,
    [currentItem.id]: currentItem,
  };
};
