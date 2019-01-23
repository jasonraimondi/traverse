import { assert } from 'chai';
import 'reflect-metadata';

import container from '@/renderer/infrastructure/container/InversifyContainer';
import TYPES from '@/renderer/infrastructure/container/Types';
import { AxiosRestClient } from '@/renderer/infrastructure/rest/AxiosRestClient';
import { GithubRestClient } from '@/renderer/infrastructure/rest/GithubRestClient';
import { GithubService } from '@/renderer/infrastructure/services/github/GithubService';

test('InversifyContainer', () => {
  const githubService = container.get(TYPES.GithubService);
  const axiosRestClient = container.get(TYPES.AxiosRestClient);
  const githubRestClient = container.get(TYPES.GithubRestClient);

  assert.instanceOf(githubService, GithubService);
  assert.instanceOf(axiosRestClient, AxiosRestClient);
  assert.instanceOf(githubRestClient, GithubRestClient);
});
