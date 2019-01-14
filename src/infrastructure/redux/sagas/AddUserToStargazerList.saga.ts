import { call, put, takeEvery } from 'redux-saga/effects';

import {
  ADD_USER_TO_STARGAZER_LIST,
  AddUserToStargazerListFailureAction,
  AddUserToStargazerListSuccessAction,
} from '@/infrastructure/redux/actions/AddUserToStargazerListAction';
import { serviceFactory } from '@/infrastructure/services/ServiceFactory';

export function* addUserToStargazerListSaga() {
  yield takeEvery(ADD_USER_TO_STARGAZER_LIST, addUserToStargazerList);
}

function addUserToStargazerListApiCall(username: string) {
  return serviceFactory.githubClient.user.getUserDetail(username);
}

function* addUserToStargazerList(action) {
  try {
    const response = yield call(addUserToStargazerListApiCall, action.payload);
    yield put(AddUserToStargazerListSuccessAction(response));
  } catch (error) {
    yield put(AddUserToStargazerListFailureAction(error.message));
  }
}
