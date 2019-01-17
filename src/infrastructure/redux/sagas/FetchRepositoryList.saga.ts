import container from '@/infrastructure/container/InversifyContainer';
import TYPES from '@/infrastructure/container/Types';
import { GithubService } from '@/infrastructure/services/github/GithubService';
import { store } from '@/renderer';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_REPOSITORY_LIST,
  FetchRepositoryListActionFields,
  FetchRepositoryListFailureAction,
  FetchRepositoryListSuccessAction,
} from '@/infrastructure/redux/actions/FetchRepositoryListAction';

export function* fetchRepositoryListSaga() {
  yield takeEvery(FETCH_REPOSITORY_LIST, fetchRepositoryList);
}

function fetchRepositoryListApiCall(fields: FetchRepositoryListActionFields) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  githubService.accessToken = store.getState().githubAccessToken;
  return githubService.search.forRepositories(fields.language.value, fields.frequency);
}

function* fetchRepositoryList(action) {
  try {
    const response = yield call(fetchRepositoryListApiCall, action.payload);
    yield put(FetchRepositoryListSuccessAction(response));
  } catch (error) {
    yield put(FetchRepositoryListFailureAction(error.message));
  }
}
