import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/renderer/infrastructure/container/InversifyContainer';
import TYPES from '@/renderer/infrastructure/container/Types';
import { GithubService } from '@/renderer/infrastructure/services/github/GithubService';
import {
  ADD_USER_TO_STARGAZER_LIST,
  AddUserToStargazerListFailureAction,
  AddUserToStargazerListSuccessAction,
} from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';

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
