import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/infrastructure/container/InversifyContainer';
import TYPES from '@/infrastructure/container/Types';
import {
  ADD_USER_TO_STARGAZER_LIST,
  AddUserToStargazerListFailureAction,
  AddUserToStargazerListSuccessAction,
} from '@/infrastructure/redux/Stargazer/actions/AddUserToStargazerListAction';
import { GithubService } from '@/infrastructure/services/github/GithubService';

export function* addUserToStargazerListSaga() {
  yield takeEvery(ADD_USER_TO_STARGAZER_LIST, addUserToStargazerList);
}

function addUserToStargazerListApiCall(username: string) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  // githubService.accessToken = store.getState().accessToken;
  return githubService.user.getUserDetail(username);
}

function* addUserToStargazerList(action) {
  try {
    const response = yield call(addUserToStargazerListApiCall, action.payload);
    yield put(AddUserToStargazerListSuccessAction(response));
  } catch (error) {
    yield put(AddUserToStargazerListFailureAction(error.message));
  }
}
