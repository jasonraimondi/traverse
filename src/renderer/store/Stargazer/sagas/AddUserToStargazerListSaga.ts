import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/renderer/infrastructure/container/InversifyContainer';
import TYPES from '@/renderer/infrastructure/container/Types';
import { GithubService } from '@/renderer/infrastructure/services/github/GithubService';
import {
  ADD_USER_TO_STARGAZER_LIST,
  AddUserToStargazerListFailureAction,
  AddUserToStargazerListSuccessAction,
} from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';

export function* AddUserToStargazerListSaga() {
  yield takeEvery(ADD_USER_TO_STARGAZER_LIST, addUserToStargazerList);
}

function* addUserToStargazerList(action) {
  try {
    const user = yield call(fetchUserDetails, action.payload);
    yield put(AddUserToStargazerListSuccessAction(user));
  } catch (error) {
    yield put(AddUserToStargazerListFailureAction(error.message));
  }
}

function fetchUserDetails(username: string) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  githubService.setAccessTokenFromStore();
  return githubService.user.getUserDetail(username);
}
