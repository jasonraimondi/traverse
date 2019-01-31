import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/renderer/infrastructure/container/InversifyContainer';
import TYPES from '@/renderer/infrastructure/container/Types';
import { GithubService } from '@/renderer/infrastructure/services/github/GithubService';
import { ActionResponse } from '@/renderer/store/Interfaces';
import {
  FETCH_TRENDING_REPOSITORY_LIST,
  FetchTrendingRepositoryListActionFields,
  FetchTrendingRepositoryListFailureAction, FetchTrendingRepositoryListNoActionRequired,
  FetchTrendingRepositoryListSuccessAction,
} from '@/renderer/store/Trending/actions/FetchTrendingRepositoryListAction';
import { TrendingLastUpdated } from '@/renderer/store/Trending/LastUpdated';

export function* FetchTrendingRepositoryListSaga() {
  yield takeEvery(FETCH_TRENDING_REPOSITORY_LIST, saga);
}

function* saga(action: ActionResponse<FetchTrendingRepositoryListActionFields>) {
  const { language, frequency } = action.payload;

  const { hasBeenUpdatedRecently } = TrendingLastUpdated(language, frequency);

  if (hasBeenUpdatedRecently) {
    yield put(FetchTrendingRepositoryListNoActionRequired());
    return;
  }

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

function FetchTrendingRepositoryListApiCall(fields: FetchTrendingRepositoryListActionFields) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  githubService.setAccessTokenFromStore();
  return githubService.search.forRepositories(fields.language.value, fields.frequency);
}
