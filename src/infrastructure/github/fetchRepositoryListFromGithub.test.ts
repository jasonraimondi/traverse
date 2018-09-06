import * as dayjs from 'dayjs';

import { trendingGitHubQueryString } from './fetchRepositoryListFromGithub';

describe('fetchRepositoryListFromGithub', () => {
  test('GitHub query string is formatted properly', () => {
    const today = dayjs('2018-05-05');

    const yearlyQuery = trendingGitHubQueryString('yearly', 'typescript', today);
    const monthlyQuery = trendingGitHubQueryString('monthly', 'javascript', today);
    const weeklyQuery = trendingGitHubQueryString('weekly', 'ActionScript', today);
    const dailyQuery = trendingGitHubQueryString('daily', 'php', today);

    expect(yearlyQuery).toEqual('language:typescript created:2017-05-06..2018-05-05');
    expect(monthlyQuery).toEqual('language:javascript created:2018-04-06..2018-05-05');
    expect(weeklyQuery).toEqual('language:ActionScript created:2018-04-29..2018-05-05');
    expect(dailyQuery).toEqual('language:php created:2018-05-04..2018-05-05');
  });
});
