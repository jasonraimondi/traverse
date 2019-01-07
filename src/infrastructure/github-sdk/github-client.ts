import { Search } from '@/infrastructure/github-sdk/search';
import { User } from '@/infrastructure/github-sdk/user';
import { RestClientInterface } from '@/infrastructure/rest/axios-rest-client';

export class GithubClient {
  constructor(private readonly restClient: RestClientInterface) {
  }

  async validateAccessToken(accessToken: string) {
    const search = await this.restClient.get('/users', {
      access_token: accessToken,
    });

    if (search.status < 300) {
      throw Error('Invalid Access Token');
    }
  }

  get search() {
    return new Search(this.restClient);
  }

  get user() {
    return new User(this.restClient);
  }
}
