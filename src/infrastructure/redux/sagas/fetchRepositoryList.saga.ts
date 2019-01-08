import { call, put, takeEvery } from 'redux-saga/effects';

import { flashErrorMessage, flashSuccessMessage } from '@/infrastructure/flashMessage';
import {
  FETCH_REPOSITORY_LIST,
  FetchRepositoryListActionFields,
  FetchRepositoryListFailureAction,
  FetchRepositoryListSuccessAction,
} from '@/infrastructure/redux/actions/FetchRepositoryList.action';
import { serviceFactory } from '@/infrastructure/services/service-factory';

export function* fetchRepositoryListSaga() {
  yield takeEvery(FETCH_REPOSITORY_LIST, fetchRepositoryList);
}

function fetchRepositoryListApiCall(fields: FetchRepositoryListActionFields) {
  return serviceFactory.githubClient.search.forRepositories(fields.language, fields.frequency);
}

function* fetchRepositoryList(action) {
  try {
    const response = yield call(fetchRepositoryListApiCall, action.payload);
    yield put(FetchRepositoryListSuccessAction(response));
  } catch (error) {
    yield flashErrorMessage(error.message);
    yield put(FetchRepositoryListFailureAction(error.message));
  }
}
