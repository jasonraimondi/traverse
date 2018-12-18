import { fork } from 'redux-saga/effects';

import { fetchRepositoryListSaga } from '@/infrastructure/redux/sagas/fetchRepositoryList.saga';

export default function* root() {
  yield fork(fetchRepositoryListSaga);
}
