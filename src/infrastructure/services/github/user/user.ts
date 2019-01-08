import { RestClientInterface } from '@/infrastructure/rest/axios-rest-client';

export class User {
  constructor(private restClient: RestClientInterface) {
  }

  async self() {
    const search = await this.restClient.get('/users');

    if (search.status === 200) {
      return search.data;
    }

    return false;
  }
}
