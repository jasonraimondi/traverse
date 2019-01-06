import { RestClientInterface } from '@/infrastructure/rest/axios-rest-client';

export type Sort = 'stars' | 'forks' | 'updated';
export type Order = 'asc' | 'desc';

export class Search {
  constructor(private restClient: RestClientInterface) {
  }

  async forRepositories(q: string, sort: Sort, order: Order) {
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

    return search.data.items;
  }
}
