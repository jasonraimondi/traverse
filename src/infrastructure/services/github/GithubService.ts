import TYPES from '@/infrastructure/container/Types';
import { GithubRestClient } from '@/infrastructure/rest/GithubRestClient';
import { inject, injectable } from 'inversify';

import { Search } from '@/infrastructure/services/github/search/Search';
import { User } from '@/infrastructure/services/github/user/User';

@injectable()
export class GithubService {
  constructor(
    @inject(TYPES.GithubRestClient) private readonly restClient: GithubRestClient,
  ) {}

  set accessToken(accessToken: string) {
    this.restClient.githubAccessToken = accessToken;
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
