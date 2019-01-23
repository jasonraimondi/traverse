import { call, put, takeEvery } from 'redux-saga/effects';

import container from '@/infrastructure/container/InversifyContainer';
import TYPES from '@/infrastructure/container/Types';
import { ActionResponse } from '@/infrastructure/redux/Interfaces';
import {
  FETCH_TRENDING_REPOSITORY_LIST,
  FetchTrendingRepositoryListActionFields,
  FetchTrendingRepositoryListFailureAction,
  FetchTrendingRepositoryListSuccessAction,
} from '@/infrastructure/redux/Trending/actions/FetchTrendingRepositoryListAction';
import { GithubService } from '@/infrastructure/services/github/GithubService';
import { store } from '@/renderer';

export function* FetchTrendingRepositoryListSaga() {
  yield takeEvery(FETCH_TRENDING_REPOSITORY_LIST, FetchTrendingRepositoryList);
}

function FetchTrendingRepositoryListApiCall(fields: FetchTrendingRepositoryListActionFields) {
  const githubService = container.get<GithubService>(TYPES.GithubService);
  const {github} = store.getState().settings;
  if (github && github.accessToken && github.accessToken) {
    githubService.accessToken = github.accessToken;
  }
  return githubService.search.forRepositories(fields.language.value, fields.frequency);
}

function* FetchTrendingRepositoryList(action: ActionResponse<FetchTrendingRepositoryListActionFields>) {
  const {language, frequency} = action.payload;
  const trending = store.getState().trending;
  const updateCheck = 1000 * 60 * 5; // five minutes

  const hasBeenUpdatedRecently = trending.list
    && trending.list[language.value]
    && trending.list[language.value][frequency]
    && Date.now() - trending.list[language.value][frequency].lastUpdated < updateCheck;

  if (hasBeenUpdatedRecently) {
    return;
  }

  try {
    const repositoryList = yield call(FetchTrendingRepositoryListApiCall, action.payload);
    yield put(FetchTrendingRepositoryListSuccessAction({
      language: action.payload.language,
      frequency: action.payload.frequency,
      data: repositoryList,
    }));
  } catch (error) {
    yield put(FetchTrendingRepositoryListFailureAction(error.message));
  }
}
