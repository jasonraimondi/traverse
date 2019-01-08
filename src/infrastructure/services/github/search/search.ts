import * as dayjs from 'dayjs';

import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { RestClientInterface } from '@/infrastructure/rest/axios-rest-client';
import { FrequencyType, frequencyTypeDate } from '@/models/Frequency.type';
import { RepositoryEntity } from '@/models/Repository.entity';

export type Sort = 'stars' | 'forks' | 'updated';
export type Order = 'asc' | 'desc';

export class Search {
  constructor(private restClient: RestClientInterface) {
  }

  async forRepositories(language: ILanguage, frequency: FrequencyType) {
    const q = Search.trendingGitHubQueryString(language.value, frequency);
    const sort: Sort = 'stars';
    const order: Order = 'desc';

    let search;

    try {
      search = await this.restClient.get('/search/repositories', { q, sort, order });
    } catch (err) {
      const url = err.response.data.documentation_url || 'err';
      const message = err.response.data.message || 'Something went wrong!';
      throw new Error(`${message} ${url}`);
    }

    if (search.status === 403) {
      throw new Error(search.data.message);
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
