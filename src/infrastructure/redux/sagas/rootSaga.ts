import { fork } from 'redux-saga/effects';

import { fetchRepositoryListSaga } from '@/infrastructure/redux/sagas/fetchRepositoryList.saga';
import { setGithubAccessTokenSaga } from '@/infrastructure/redux/sagas/setGithubAccessToken.saga';

export default function* root() {
  yield fork(fetchRepositoryListSaga);
  yield fork(setGithubAccessTokenSaga);
}
