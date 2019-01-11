import { RestClientInterface } from '@/infrastructure/rest/axios-rest-client';
import { Search } from '@/infrastructure/services/github/search/search';
import { User } from '@/infrastructure/services/github/user/user';

export class GithubService {
  constructor(private readonly restClient: RestClientInterface) {
  }

  async validateAccessToken(accessToken: string) {
    const search = await this.restClient.get('/users', {
      access_token: accessToken,
    });
    return search.status < 300 || search.status === 304;
  }

  get search() {
    return new Search(this.restClient);
  }

  get user() {
    return new User(this.restClient);
  }
}
