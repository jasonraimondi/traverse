import { ElectronSettingService } from '@/infrastructure/electron/SettingsService';
import { AxiosRestClient } from '@/infrastructure/rest/axios-rest-client';
import { GithubRestClient } from '@/infrastructure/rest/github-rest-client';
import { GithubService } from '@/infrastructure/services/github/github-service';

class ServiceFactory {
  get githubClient() {
    return new GithubService(
      new GithubRestClient(
        new AxiosRestClient('https://api.github.com'),
      ElectronSettingService.get('github.apiKey') || null,
      ),
    );
  }
}

export const serviceFactory = new ServiceFactory();
