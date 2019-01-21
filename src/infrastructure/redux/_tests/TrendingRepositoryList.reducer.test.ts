import { FetchTrendingRepositoryListSaga } from '@/infrastructure/redux/sagas/FetchTrendingRepositoryList.saga';
import { assert } from 'chai';

import {
  FETCH_TRENDING_REPOSITORY_LIST,
  FetchTrendingRepositoryListAction,
  FetchTrendingRepositoryListSuccessAction,
} from '@/infrastructure/redux/actions/FetchTrendingRepositoryListAction';
import { trendingRepositoryListReducer } from '@/infrastructure/redux/reducers/TrendingRepositoryListReducer';
import { put, take } from 'redux-saga/effects';

describe('Trending RepositoryList Reducer', () => {
  test('INITIAL_STATE for repository list is blank', () => {
    const action = { type: undefined };
    const initialState = {};
    assert.deepStrictEqual(trendingRepositoryListReducer(undefined, action), initialState);
  });

  test('FETCH_TRENDING_REPOSITORY_LIST_SUCCESS updates the repository list reducer properly', () => {
    const data = require('@/infrastructure/rest/_tests/responses/search-repository-success.json');
    const action = FetchTrendingRepositoryListAction({
      language: { value: 'typescript', title: 'TypeScript' },
      frequency: 'daily',
    });

    // const repositoryList = trendingRepositoryListReducer(undefined, action);
    // console.log(repositoryList);
    const gen = FetchTrendingRepositoryListSaga();
    assert.strictEqual(
      gen.next().value,
      put(action),
      'it should wait for a user to choose a color',
    );
    // const repo = repositoryList[''];
    // assert.strictEqual(Object.values(repositoryList)[0].id, 147134009);
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.name, 'vscode-wal');
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.htmlUrl, 'https://github.com/cmschuetz/vscode-wal');
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.forksCount, 0);
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.watchersCount, 1);
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.stargazersCount, 1);
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.longName, 'cmschuetz/vscode-wal');
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.description, 'Fake description Jason added');
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.owner.login, 'cmschuetz');
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.owner.htmlUrl, 'https://github.com/cmschuetz');
    // assert.strictEqual(Object.keys(repositoryList).length, 30);
  });
});
