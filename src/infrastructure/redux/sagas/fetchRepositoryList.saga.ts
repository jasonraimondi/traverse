import { fetchRepositoryListFromGithub } from '@/infrastructure/github-sdk/api/fetch-repository-list-from-github';
import { call, put, takeEvery } from 'redux-saga/effects';

import { flashErrorMessage } from '@/infrastructure/error';

import {
  FETCH_REPOSITORY_LIST,
  FetchRepositoryListActionFields,
  FetchRepositoryListFailureAction,
  FetchRepositoryListSuccessAction,
} from '@/infrastructure/redux/actions/FetchRepositoryList.action';

export function* fetchRepositoryListSaga() {
  yield takeEvery(FETCH_REPOSITORY_LIST, fetchRepositoryList);
}

function fetchRepositoryListApiCall(fields: FetchRepositoryListActionFields) {
  return fetchRepositoryListFromGithub(fields.language, fields.frequency);
}

function* fetchRepositoryList(action) {
  try {
    const response = yield call(fetchRepositoryListApiCall, action.payload);
    yield put(FetchRepositoryListSuccessAction(response));
  } catch (error) {
    flashErrorMessage(error.message);
    yield put(FetchRepositoryListFailureAction(error.message));
  }
}
