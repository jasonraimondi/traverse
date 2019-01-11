import * as dayjs from 'dayjs';

import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { AxiosRestClient, RestClientInterface } from '@/infrastructure/rest/axios-rest-client';
import { FrequencyType, frequencyTypeDate } from '@/models/Frequency.type';
import { RepositoryEntity } from '@/models/Repository.entity';

export type Sort = 'stars' | 'forks' | 'updated';
export type Order = 'asc' | 'desc';

export class Search {
  constructor(private restClient: RestClientInterface) {
  }

  async forRepositories(language: string, frequency: FrequencyType): Promise<RepositoryEntity[]> {
    const q = Search.trendingGitHubQueryString(language, frequency);
    const sort: Sort = 'stars';
    const order: Order = 'desc';
    const search = await this.restClient.get('/search/repositories', {
      q,
      sort,
      order,
    }).catch(AxiosRestClient.handleError);
    if (!search) {
      return [];
    }
    return search.data.items.map((repo) => RepositoryEntity.fromResponse(repo));
  }

  static trendingGitHubQueryString(language: string, frequency: FrequencyType, today?: dayjs.Dayjs): string {
    const frequencyDate = frequencyTypeDate(frequency, today);
    const languageString = `language:${language}`;
    const createdString = `created:${frequencyDate.from}..${frequencyDate.to}`;
    return `${languageString} ${createdString}`;
  }
}
