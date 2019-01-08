import { AxiosRestClient } from '@/infrastructure/rest/axios-rest-client';
import { GithubRestClient } from '@/infrastructure/rest/github-rest-client';
import { GithubClientService } from '@/infrastructure/services/github/github-client-service';

class ServiceFactory {
  get githubClient() {
    return new GithubClientService(
      new GithubRestClient(
        new AxiosRestClient('https://api.github.com'),
      ),
    );
  }
}

export const serviceFactory = new ServiceFactory();
