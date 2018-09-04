import { FrequencyType } from '../../../models/Frequency.type';
import { RepositoryEntity } from '../../../models/Repository.entity';
import { IActionResponse } from '../action-response';

export const FETCH_REPOSITORY_LIST = '[REPOSITORY LIST] fetch';
export const FETCH_REPOSITORY_LIST_SUCCESS = '[REPOSITORY LIST] fetch - success';
export const FETCH_REPOSITORY_LIST_FAILURE = '[REPOSITORY LIST] fetch - failure';

export interface FetchRepositoryListActionFields {
  frequency: FrequencyType;
  language: string;
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
    .map((response) => new RepositoryEntity(
      response.id,
      response.name,
    ))
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
