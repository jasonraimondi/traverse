import { store } from '@/renderer';
import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/renderer/infrastructure/container/InversifyContainer';
import TYPES from '@/renderer/infrastructure/container/Types';
import { GithubService } from '@/renderer/infrastructure/services/github/GithubService';
import {
  SET_CURRENT_STARGAZER,
  SetCurrentStargazerFailureAction, SetCurrentStargazerSuccessAction,
} from '@/renderer/store/Stargazer/actions/SetCurrentStargazerAction';

export function* SetCurrentStargazerSaga() {
  yield takeEvery(SET_CURRENT_STARGAZER, setCurrentStargazer);
}

function listStarredRepositoriesForUser(username: string) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  githubService.setAccessTokenFromStore();
  return githubService.user.listStarred(username);
}

function* setCurrentStargazer(action) {
  try {
    const response = yield call(listStarredRepositoriesForUser, action.payload);
    yield put(SetCurrentStargazerSuccessAction({
      repositoryList: response,
      user: response,
    }));
  } catch (error) {
    yield put(SetCurrentStargazerFailureAction(error.message));
  }
}
