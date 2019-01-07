import { call, put, takeEvery } from 'redux-saga/effects';

import {
  SET_GITHUB_ACCESS_TOKEN, SetGithubAccessTokenFailureAction,
  SetGithubAccessTokenSuccessAction,
} from '@/infrastructure/redux/actions/SetGithubAccessToken.action';
import { serviceFactory } from '@/infrastructure/services/service-factory';

export function* setGithubAccessTokenSaga() {
  yield takeEvery(SET_GITHUB_ACCESS_TOKEN, setGithubAccessToken);
}

async function validateAccessToken(accessToken: string) {
  return await serviceFactory.githubClient.validateAccessToken(accessToken);
}

function* setGithubAccessToken(action) {
  try {
    // @TODO here
    const isValid = yield call(validateAccessToken, action.payload);
    if (isValid) {
      yield put(SetGithubAccessTokenSuccessAction(action.payload));
    } else {
      yield put(SetGithubAccessTokenFailureAction('Invalid Error Message'));
    }
  } catch (error) {
    alert(`error ${error.message}`);
    // yield put(SetGithubAccessTokenFailureAction(error.message));
  }
}
