import { call, put, takeEvery } from 'redux-saga/effects';

import {
  SET_GITHUB_ACCESS_TOKEN, SetGithubAccessTokenFailureAction,
  SetGithubAccessTokenSuccessAction,
} from '@/infrastructure/redux/actions/SetGithubAccessTokenAction';
import { serviceFactory } from '@/infrastructure/services/ServiceFactory';

export function* setGithubAccessTokenSaga() {
  yield takeEvery(SET_GITHUB_ACCESS_TOKEN, setGithubAccessToken);
}

async function validateAccessToken(accessToken: string) {
  return await serviceFactory.githubClient.validateAccessToken(accessToken);
}

function* setGithubAccessToken(action) {
  try {
    const isValid = yield call(validateAccessToken, action.payload);
    if (isValid) {
      yield put(SetGithubAccessTokenSuccessAction(action.payload));
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
