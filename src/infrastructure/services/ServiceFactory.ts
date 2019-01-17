import { AxiosRestClient } from '@/infrastructure/rest/AxiosRestClient';
import { GithubRestClient } from '@/infrastructure/rest/GithubRestClient';
import { GithubService } from '@/infrastructure/services/github/GithubService';

class ServiceFactory {
  constructor(private readonly githubRestClient) {}

  get githubClient() {
    return new GithubService(this.githubRestClient);
  }
}

const githubAccessToken = 'befe47d7ed69e48762c2cc41eea661d6d2778998';

export const serviceFactory = new ServiceFactory(
  new GithubRestClient(
    new AxiosRestClient(),
    githubAccessToken,
  ),
);
