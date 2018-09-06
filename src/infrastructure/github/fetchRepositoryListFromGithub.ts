import * as dayjs from 'dayjs';

import { FrequencyType, frequencyTypeDate } from '../../models/Frequency.type';
import { GithubRestClient } from './GithubRestClient';

export type Sort = 'stars' | 'forks' | 'updated';
export type Order = 'asc' | 'desc';

export function trendingGitHubQueryString(frequency: FrequencyType, language: string, today?: dayjs.Dayjs) {
  const frequencyDate = frequencyTypeDate(frequency, today);
  const languageString = `language:${language}`;
  const createdString = `created:${frequencyDate.from}..${frequencyDate.to}`;
  return `${languageString} ${createdString}`;
}

export async function fetchRepositoryListFromGithub(language: string, frequency: FrequencyType): Promise<any> {
  return await searchForRepositories(
    trendingGitHubQueryString(frequency, language),
    'stars',
    'desc',
  );
}

async function searchForRepositories(q: string, sort: Sort, order: Order) {
  const search = await GithubRestClient('/search/repositories', { q, sort, order });
  return search.data;
}
