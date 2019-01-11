import { AxiosRestClient } from '@/infrastructure/rest/axios-rest-client';
import { GithubRestClient } from '@/infrastructure/rest/github-rest-client';
import { GithubService } from 'github-service.ts';

class ServiceFactory {
  get githubClient() {
    return new GithubService(
      new GithubRestClient(
        new AxiosRestClient('https://api.github.com'),
      ),
    );
  }
}

export const serviceFactory = new ServiceFactory();
