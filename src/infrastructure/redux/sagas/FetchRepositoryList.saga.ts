import { call, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_REPOSITORY_LIST, FetchRepositoryListActionFields,
  FetchRepositoryListFailureAction,
  FetchRepositoryListSuccessAction,
} from '@/infrastructure/redux/actions/FetchRepositoryListAction';
import { serviceFactory } from '@/infrastructure/services/ServiceFactory';

export function* fetchRepositoryListSaga() {
  yield takeEvery(FETCH_REPOSITORY_LIST, fetchRepositoryList);
}

function fetchRepositoryListApiCall(fields: FetchRepositoryListActionFields) {
  return serviceFactory.githubClient.search.forRepositories(fields.language.value, fields.frequency);
}

function* fetchRepositoryList(action) {
  try {
    const response = yield call(fetchRepositoryListApiCall, action.payload);
    yield put(FetchRepositoryListSuccessAction(response));
  } catch (error) {
    yield put(FetchRepositoryListFailureAction(error.message));
  }
}
