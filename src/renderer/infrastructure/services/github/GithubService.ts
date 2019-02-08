import { inject, injectable } from 'inversify';

import { store } from '@/renderer';
import TYPES from '@/renderer/infrastructure/container/Types';
import { GithubRestClient } from '@/renderer/infrastructure/rest/GithubRestClient';
import { Search } from '@/renderer/infrastructure/services/github/search/Search';
import { User } from '@/renderer/infrastructure/services/github/user/User';

@injectable()
export class GithubService {
  constructor(
    @inject(TYPES.GithubRestClient) private readonly restClient: GithubRestClient,
  ) {}

  setAccessTokenFromStore() {
    const { github } = store.getState().settings;
    if (github && github.accessToken) {
      this.accessToken = github.accessToken;
    }
  }

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
