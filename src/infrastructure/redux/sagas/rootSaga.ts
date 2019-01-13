import { addUserToStargazerListSaga } from '@/infrastructure/redux/sagas/AddUserToStargazerList.saga';
import { fork } from 'redux-saga/effects';

import { fetchRepositoryListSaga } from '@/infrastructure/redux/sagas/FetchRepositoryList.saga';
import { setGithubAccessTokenSaga } from '@/infrastructure/redux/sagas/SetGithubAccessToken.saga';

export default function* root() {
  yield fork(addUserToStargazerListSaga);
  yield fork(fetchRepositoryListSaga);
  yield fork(setGithubAccessTokenSaga);
}
