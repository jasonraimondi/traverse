import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_REPOSITORY_LIST,
  FetchRepositoryListActionFields,
  fetchRepositoryListFailureAction,
  fetchRepositoryListSuccessAction,
} from '../actions/FetchRepositoryList.action';

export function* fetchRepositoryListSaga() {
  yield takeEvery(FETCH_REPOSITORY_LIST, fetchRepositoryList);
}

function fetchRepositoryListApiCall(fields: FetchRepositoryListActionFields) {
  return fields;
}

function* fetchRepositoryList(action) {
  try {
    const response = yield call(fetchRepositoryListApiCall, action.payload);
    yield put(fetchRepositoryListSuccessAction(response));
  } catch (error) {
    yield put(fetchRepositoryListFailureAction(error.message));
  }
}
