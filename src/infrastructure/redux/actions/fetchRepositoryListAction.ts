import { FrequencyType } from '../../../models/Frequency.type';
import { IActionResponse } from '../action-response';

export const FETCH_REPOSITORY_LIST = '[REPOSITORY LIST] fetch';

export type FetchRepositoryListType = (frequency: FrequencyType, language: string) => IActionResponse<{}>;

export const fetchRepositoryListAction: FetchRepositoryListType = (frequency, language) => {
  return {
    type: FETCH_REPOSITORY_LIST,
    payload: {},
  };
};
