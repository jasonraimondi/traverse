import { ElectronSettingService } from '@/electron/SettingsService';
import { AxiosRestClient } from '@/infrastructure/rest/AxiosRestClient';
import { GithubRestClient } from '@/infrastructure/rest/GithubRestClient';
import { GithubService } from '@/infrastructure/services/github/GithubService';

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
