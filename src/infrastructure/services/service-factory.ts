import { ElectronSettingService } from '@/electron/SettingsService';
import { AxiosRestClient } from '@/infrastructure/rest/axios-rest-client';
import { GithubRestClient } from '@/infrastructure/rest/github-rest-client';
import { GithubService } from '@/infrastructure/services/github/github-service';

class ServiceFactory {
  constructor(private readonly githubRestClient) {}

  get githubClient() {
    return new GithubService(this.githubRestClient);
  }
}

export const serviceFactory = new ServiceFactory(
  new GithubRestClient(
    new AxiosRestClient('https://api.github.com'),
    ElectronSettingService.get('github.apiKey') || null,
  ),
);
