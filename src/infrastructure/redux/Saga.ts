import { fork } from 'redux-saga/effects';

import { SetGithubAccessTokenSaga } from '@/infrastructure/redux/Settings/sagas/SetGithubAccessTokenSaga';
import { FetchTrendingRepositoryListSaga } from '@/infrastructure/redux/Trending/sagas/FetchTrendingRepositoryListSaga';

export default function* rootSaga() {
  yield fork(FetchTrendingRepositoryListSaga);
  yield fork(SetGithubAccessTokenSaga);
}
