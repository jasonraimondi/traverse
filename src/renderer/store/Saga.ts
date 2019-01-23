import { fork } from 'redux-saga/effects';

import { SetGithubAccessTokenSaga } from '@/renderer/store/Settings/sagas/SetGithubAccessTokenSaga';
import { FetchTrendingRepositoryListSaga } from '@/renderer/store/Trending/sagas/FetchTrendingRepositoryListSaga';

export default function* rootSaga() {
  yield fork(FetchTrendingRepositoryListSaga);
  yield fork(SetGithubAccessTokenSaga);
}
