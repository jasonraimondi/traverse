import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/renderer/infrastructure/container/InversifyContainer';
import TYPES from '@/renderer/infrastructure/container/Types';
import { GithubService } from '@/renderer/infrastructure/services/github/GithubService';
import {
  SET_CURRENT_STARGAZER,
  SetCurrentStargazerFailureAction,
} from '@/renderer/store/Stargazer/actions/SetCurrentStargazerAction';

export function* setCurrentStargazerSaga() {
  yield takeEvery(SET_CURRENT_STARGAZER, setCurrentStargazer);
}

function listStarredRepositoriesForUser(username: string) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  // const githubConfig = store.getState()
  // githubService.accessToken = store.getState().githubAccessToken;
  return githubService.user.listStarred(username);
}

function* setCurrentStargazer(action) {
  try {
    const response = yield call(listStarredRepositoriesForUser, action.payload);
    // const repositoryList = response.reduce(listByIdsReducer, {});
    // const currentStargazer: CurrentStargazerReducer = {
    //   login: action.payload,
    //   repositoryList: trendingRepositoryList,
    // };
    // yield put(SetCurrentStargazerSuccessAction(currentStargazer));
  } catch (error) {
    yield put(SetCurrentStargazerFailureAction(error.message));
  }
}
