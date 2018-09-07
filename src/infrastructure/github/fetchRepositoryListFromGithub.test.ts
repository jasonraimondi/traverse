import { assert } from 'chai';
import * as dayjs from 'dayjs';

import { trendingGitHubQueryString } from './fetchRepositoryListFromGithub';

describe('fetchRepositoryListFromGithub', () => {
  test('GitHub query string is formatted properly', () => {
    const today = dayjs('2018-05-05');

    const yearlyQuery = trendingGitHubQueryString('yearly', 'typescript', today);
    const monthlyQuery = trendingGitHubQueryString('monthly', 'javascript', today);
    const weeklyQuery = trendingGitHubQueryString('weekly', 'ActionScript', today);
    const dailyQuery = trendingGitHubQueryString('daily', 'php', today);

    assert.equal(yearlyQuery, 'language:typescript created:2017-05-06..2018-05-05');
    assert.equal(monthlyQuery, 'language:javascript created:2018-04-06..2018-05-05');
    assert.equal(weeklyQuery, 'language:ActionScript created:2018-04-29..2018-05-05');
    assert.equal(dailyQuery, 'language:php created:2018-05-04..2018-05-05');
  });
});
