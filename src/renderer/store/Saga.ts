import { fork } from 'redux-saga/effects';

import { SetGithubAccessTokenSaga } from '@/renderer/store/Settings/sagas/SetGithubAccessTokenSaga';
import { AddUserToStargazerListSaga } from '@/renderer/store/Stargazer/sagas/AddUserToStargazerListSaga';
import { SetCurrentStargazerSaga } from '@/renderer/store/Stargazer/sagas/SetCurrentStargazerSaga';
import { FetchTrendingRepositoryListSaga } from '@/renderer/store/Trending/sagas/FetchTrendingRepositoryListSaga';

export default function* rootSaga() {
  yield fork(AddUserToStargazerListSaga);
  yield fork(SetCurrentStargazerSaga);
  yield fork(FetchTrendingRepositoryListSaga);
  yield fork(SetGithubAccessTokenSaga);
}
