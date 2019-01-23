import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/infrastructure/container/InversifyContainer';
import TYPES from '@/infrastructure/container/Types';
import { ActionResponse } from '@/infrastructure/redux/Interfaces';
import {
  FETCH_TRENDING_REPOSITORY_LIST,
  FetchTrendingRepositoryListActionFields,
  FetchTrendingRepositoryListFailureAction,
  FetchTrendingRepositoryListSuccessAction,
} from '@/infrastructure/redux/Trending/actions/FetchTrendingRepositoryListAction';
import { GithubService } from '@/infrastructure/services/github/GithubService';

export function* FetchTrendingRepositoryListSaga() {
  yield takeEvery(FETCH_TRENDING_REPOSITORY_LIST, FetchTrendingRepositoryList);
}

function FetchTrendingRepositoryListApiCall(fields: FetchTrendingRepositoryListActionFields) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  // githubService.accessToken = store.getState().accessToken;
  return githubService.search.forRepositories(fields.language.value, fields.frequency);
}

function* FetchTrendingRepositoryList(action: ActionResponse<FetchTrendingRepositoryListActionFields>) {
  try {
    const repositoryList = yield call(FetchTrendingRepositoryListApiCall, action.payload);
    yield put(FetchTrendingRepositoryListSuccessAction({
      language: action.payload.language,
      frequency: action.payload.frequency,
      data: repositoryList,
    }));
  } catch (error) {
    yield put(FetchTrendingRepositoryListFailureAction(error.message));
  }
}
