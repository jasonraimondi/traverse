import { assert } from 'chai';
import * as dayjs from 'dayjs';
import 'reflect-metadata';

import { FakeRestClient } from '@/renderer/infrastructure/rest/_tests/FakeRestClient';
import { Search } from '@/renderer/infrastructure/services/github/search/Search';

describe('Search Github Tests', () => {
  let search: Search;

  beforeEach(() => {
    search = new Search(FakeRestClient.create());
  });

  test('github search for repositories', async () => {
    const repositories = await search.forRepositories('typescript', 'weekly');

    assert.strictEqual(repositories[0].id, 147137240);
    assert.strictEqual(repositories[0].attributes.name, 'redux-saga-starwars-react-native');
    assert.strictEqual(repositories[0].attributes.stargazersCount, 6);
  });

  test('github query string is properly formatted', () => {
    const today = dayjs('2018-05-05');

    const yearlyQuery = Search.trendingGitHubQueryString('typescript', 'yearly', today);
    const monthlyQuery = Search.trendingGitHubQueryString('javascript', 'monthly', today);
    const weeklyQuery = Search.trendingGitHubQueryString('ActionScript', 'weekly', today);
    const dailyQuery = Search.trendingGitHubQueryString('php', 'daily', today);

    assert.strictEqual(yearlyQuery, 'language:typescript created:2017-05-06..2018-05-05');
    assert.strictEqual(monthlyQuery, 'language:javascript created:2018-04-06..2018-05-05');
    assert.strictEqual(weeklyQuery, 'language:ActionScript created:2018-04-29..2018-05-05');
    assert.strictEqual(dailyQuery, 'language:php created:2018-05-04..2018-05-05');
  });
});
