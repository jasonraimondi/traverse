import { assert } from 'chai';

import { FetchRepositoryListSuccessAction } from '@/infrastructure/redux/actions/FetchRepositoryListAction';
import { trendingRepositoryListReducer } from 'TrendingRepositoryListReducer.ts';
import { RepositoryEntity } from '@/models/Repository.entity';

describe('RepositoryList Reducer', () => {
  test('INITIAL_STATE for repository list is blank', () => {
    const action = { type: undefined };
    const initialState = {};
    assert.deepStrictEqual(trendingRepositoryListReducer(undefined, action), initialState);
  });

  test('FETCH_REPOSITORY_LIST_SUCCESS updates the repository list reducer properly', () => {
    const data = require('@/infrastructure/rest/_tests/responses/search-repository-success.json');
    const list = data.items.map((repo) => RepositoryEntity.fromResponse(repo));
    const action = FetchRepositoryListSuccessAction(list);

    const repositoryList = trendingRepositoryListReducer(undefined, action);
    assert.strictEqual(Object.values(repositoryList)[0].id, 147134009);
    assert.strictEqual(Object.values(repositoryList)[0].attributes.name, 'vscode-wal');
    assert.strictEqual(Object.values(repositoryList)[0].attributes.htmlUrl, 'https://github.com/cmschuetz/vscode-wal');
    assert.strictEqual(Object.values(repositoryList)[0].attributes.forksCount, 0);
    assert.strictEqual(Object.values(repositoryList)[0].attributes.watchersCount, 1);
    assert.strictEqual(Object.values(repositoryList)[0].attributes.stargazersCount, 1);
    assert.strictEqual(Object.values(repositoryList)[0].attributes.longName, 'cmschuetz/vscode-wal');
    assert.strictEqual(Object.values(repositoryList)[0].attributes.description, 'Fake description Jason added');
    assert.strictEqual(Object.values(repositoryList)[0].attributes.owner.login, 'cmschuetz');
    assert.strictEqual(Object.values(repositoryList)[0].attributes.owner.htmlUrl, 'https://github.com/cmschuetz');
    assert.strictEqual(Object.keys(repositoryList).length, 30);
  });
});
