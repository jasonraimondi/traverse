import { inject, injectable } from 'inversify';

import TYPES from '@/infrastructure/container/Types';
import { GithubRestClient } from '@/infrastructure/rest/GithubRestClient';
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

  get search() {
    return new Search(this.restClient);
  }

  get user() {
    return new User(this.restClient);
  }
}
