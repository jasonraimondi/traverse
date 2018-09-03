import { fork } from 'redux-saga/effects';

import { fetchRepositoryListSaga } from './fetchRepositoryList.saga';

export default function* root() {
  yield fork(fetchRepositoryListSaga);
}
