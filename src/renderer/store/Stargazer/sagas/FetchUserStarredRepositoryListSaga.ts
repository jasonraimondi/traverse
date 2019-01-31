import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/renderer/infrastructure/container/InversifyContainer';
import TYPES from '@/renderer/infrastructure/container/Types';
import { GithubService } from '@/renderer/infrastructure/services/github/GithubService';
import {
  FETCH_USER_STARRED_REPOSITORY_LIST,
  FetchUserStarredRepositoryListFailureAction, FetchUserStarredRepositoryListNoActionRequired,
  FetchUserStarredRepositoryListSuccessAction,
} from '@/renderer/store/Stargazer/actions/FetchUserStarredRepositoryListAction';
import { StargazerRepositoryListLastUpdated } from '@/renderer/store/Stargazer/LastUpdated';

export function* FetchUserStarredRepositoryListSaga() {
  yield takeEvery(FETCH_USER_STARRED_REPOSITORY_LIST, saga);
}

function* saga(action) {
  const { hasBeenUpdatedRecently } = StargazerRepositoryListLastUpdated(action.payload);

  if (hasBeenUpdatedRecently) {
    yield put(FetchUserStarredRepositoryListNoActionRequired());
    return;
  }

  try {
    const user = yield call(fetchUserDetails, action.payload);
    const stargazerRepositoryList = yield call(fetchStarredRepositoryList, action.payload);
    yield put(FetchUserStarredRepositoryListSuccessAction({user, stargazerRepositoryList}));
  } catch (error) {
    yield put(FetchUserStarredRepositoryListFailureAction(error.message));
  }
}

function fetchUserDetails(username: string) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  githubService.setAccessTokenFromStore();
  return githubService.user.getUserDetail(username);
}

function fetchStarredRepositoryList(username: string) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  githubService.setAccessTokenFromStore();
  return githubService.user.listStarred(username);
}
