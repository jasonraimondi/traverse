import { store } from '@/renderer';
import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/infrastructure/container/InversifyContainer';
import TYPES from '@/infrastructure/container/Types';
import { listByIdsReducer } from '@/infrastructure/redux/actions/FetchRepositoryListAction';
import {
  SET_CURRENT_STARGAZER, SetCurrentStargazerFailureAction,
  SetCurrentStargazerSuccessAction,
} from '@/infrastructure/redux/actions/SetCurrentStargazerAction';
import { CurrentStargazerReducer } from '@/infrastructure/redux/reducers/CurrentStargazer.reducer';
import { GithubService } from '@/infrastructure/services/github/GithubService';

export function* setCurrentStargazerSaga() {
  yield takeEvery(SET_CURRENT_STARGAZER, setCurrentStargazer);
}

function listStarredRepositoriesForUser(username: string) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  githubService.accessToken = store.getState().githubAccessToken;
  return githubService.user.listStarred(username);
}

function* setCurrentStargazer(action) {
  try {
    const response = yield call(listStarredRepositoriesForUser, action.payload);
    const repositoryList = response.reduce(listByIdsReducer, {});
    const currentStargazer: CurrentStargazerReducer = {
      login: action.payload,
      repositoryList,
    };
    yield put(SetCurrentStargazerSuccessAction(currentStargazer));
  } catch (error) {
    yield put(SetCurrentStargazerFailureAction(error.message));
  }
}
