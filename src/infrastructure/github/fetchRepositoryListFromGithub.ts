import * as dayjs from 'dayjs';

import { FrequencyType } from '../../models/Frequency.type';
import { GithubRestClient } from './GithubRestClient';

export type Sort = 'stars' | 'forks' | 'updated';
export type Order = 'asc' | 'desc';

export async function fetchRepositoryListFromGithub(language: string, frequency: FrequencyType): Promise<any> {
  const frequencyDate = getDateForFrequency(frequency);
  const languageString = `language:${language}`;
  const createdString = `created:${frequencyDate.from}..${frequencyDate.to}`;
  return await searchForRepositories(`${languageString} ${createdString}`, 'stars', 'desc');
}

async function searchForRepositories(q: string, sort: Sort, order: Order) {
  let search;
  search = await GithubRestClient('/search/repositories', { q, sort, order });
  return search.data;
}

function getDateForFrequency(frequency: FrequencyType) {
  let dateJump;

  switch (frequency) {
    case 'daily':
      dateJump = 1;
      break;
    case 'weekly':
      dateJump = 7;
      break;
    case 'monthly':
      dateJump = 30;
      break;
    case 'quarterly':
      dateJump = 90;
      break;
    case 'yearly':
      dateJump = 365;
      break;
  }

  return {
    to: dayjs().format('YYYY-MM-DD'),
    from: dayjs().add(1, 'day').subtract(dateJump, 'day').format('YYYY-MM-DD'),
  };
}
