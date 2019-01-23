import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/renderer/infrastructure/container/InversifyContainer';
import TYPES from '@/renderer/infrastructure/container/Types';
import { GithubService } from '@/renderer/infrastructure/services/github/GithubService';
import { ActionResponse } from '@/renderer/store/Interfaces';
import {
  SET_GITHUB_ACCESS_TOKEN,
  SetGithubAccessTokenFailureAction,
  SetGithubAccessTokenSuccessAction,
} from '@/renderer/store/Settings/actions/SetGithubAccessTokenAction';

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
