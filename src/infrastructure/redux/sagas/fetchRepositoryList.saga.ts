import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchRepositoryListFromGithub } from '../../github/fetchRepositoryListFromGithub';
import {
  FETCH_REPOSITORY_LIST,
  FetchRepositoryListActionFields,
  FetchRepositoryListFailureAction,
  FetchRepositoryListSuccessAction,
} from '../actions/FetchRepositoryList.action';

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
    yield put(FetchRepositoryListFailureAction(error.message));
  }
}
