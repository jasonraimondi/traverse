import * as dayjs from 'dayjs';

import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { serviceFactory } from '@/infrastructure/services/service-factory';
import { FrequencyType, frequencyTypeDate } from '@/models/Frequency.type';
import { RepositoryEntity } from '@/models/Repository.entity';

export async function fetchRepositoryListFromGithub(
  language: ILanguage,
  frequency: FrequencyType,
): Promise<RepositoryEntity[]> {
  const frequencyTypeString = trendingGitHubQueryString(frequency, language.value);
  const search = await serviceFactory.githubClient.search.forRepositories(frequencyTypeString, 'stars', 'desc');
  return search.map((repo) => RepositoryEntity.fromResponse(repo));
}

export function trendingGitHubQueryString(frequency: FrequencyType, language: string, today?: dayjs.Dayjs) {
  const frequencyDate = frequencyTypeDate(frequency, today);
  const languageString = `language:${language}`;
  const createdString = `created:${frequencyDate.from}..${frequencyDate.to}`;
  return `${languageString} ${createdString}`;
}
