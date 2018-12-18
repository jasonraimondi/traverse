import axios from 'axios';
import * as dayjs from 'dayjs';

import { GitHubRest } from '@/infrastructure/github/GitHubRest';
import { FrequencyType, frequencyTypeDate } from '@/models/Frequency.type';

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
  const githubRest = GitHubRest('/search/repositories', { q, sort, order });
  const search = await axios.get(githubRest.url, githubRest.config);
  return search.data;
}
