import { ActionResponse } from '@/infrastructure/redux/Interfaces';
import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/infrastructure/container/InversifyContainer';
import TYPES from '@/infrastructure/container/Types';
import {
  SET_GITHUB_ACCESS_TOKEN, SetGithubAccessTokenFailureAction,
  SetGithubAccessTokenSuccessAction,
} from '@/infrastructure/redux/Settings/actions/SetGithubAccessTokenAction';
import { GithubService } from '@/infrastructure/services/github/GithubService';

export function* SetGithubAccessTokenSaga() {
  yield takeEvery(SET_GITHUB_ACCESS_TOKEN, setGithubAccessToken);
}

async function fetchAuthUserDetails(accessToken: string) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  githubService.accessToken = accessToken;
  return await githubService.user.self();
}

function* setGithubAccessToken(action: ActionResponse<string>) {
  try {
    const token = action.payload;
    const user = yield call(fetchAuthUserDetails, token);
    if (user) {
      yield put(SetGithubAccessTokenSuccessAction({token, user}));
    } else {
      yield fail();
    }
  } catch (error) {
    yield fail();
  }
}

function* fail() {
  yield put(SetGithubAccessTokenFailureAction('Invalid Access Token'));
}
