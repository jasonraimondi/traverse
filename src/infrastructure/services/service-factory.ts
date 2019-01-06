import { GithubClient } from '@/infrastructure/github-sdk/github-client';
import { AxiosRestClient } from '@/infrastructure/rest/axios-rest-client';
import { GithubRestClient } from '@/infrastructure/rest/github-rest-client';

class ServiceFactory {
  get githubClient(): GithubClient {
    return new GithubClient(
      new GithubRestClient(
        new AxiosRestClient('https://api.github.com'),
      ),
    );
  }
}

export const serviceFactory = new ServiceFactory();
