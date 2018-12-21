import { ILanguage } from '@/app/TrendingRepos/LanguageList';
import { IActionResponse } from '@/infrastructure/redux/action-response';
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

export function FetchRepositoryListSuccessAction(data: any): IActionResponse<{ [id: string]: RepositoryEntity }> {
  data = data.items
    .map((response) => RepositoryEntity.fromResponse(response))
    .reduce(
      (entities, currentItem: RepositoryEntity) => {
        return {
          ...entities,
          [currentItem.id]: currentItem,
        };
      },
      {},
    );
  return {
    type: FETCH_REPOSITORY_LIST_SUCCESS,
    payload: data,
  };
}

export function FetchRepositoryListFailureAction(message): IActionResponse<string> {
  return {
    type: FETCH_REPOSITORY_LIST_FAILURE,
    payload: message,
  };
}
