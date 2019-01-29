import { fork } from 'redux-saga/effects';

import { SetGithubAccessTokenSaga } from '@/renderer/store/Settings/sagas/SetGithubAccessTokenSaga';
import { AddUserToStargazerListSaga } from '@/renderer/store/Stargazer/sagas/AddUserToStargazerListSaga';
import {
  FetchUserStarredRepositoryListSaga,
} from '@/renderer/store/Stargazer/sagas/FetchUserStarredRepositoryListSaga';
import { FetchTrendingRepositoryListSaga } from '@/renderer/store/Trending/sagas/FetchTrendingRepositoryListSaga';

export default function* rootSaga() {
  yield fork(AddUserToStargazerListSaga);
  yield fork(FetchUserStarredRepositoryListSaga);
  yield fork(FetchTrendingRepositoryListSaga);
  yield fork(SetGithubAccessTokenSaga);
}
