import { assert } from 'chai';

import { FakeRestClient } from '@/infrastructure/rest/_tests/fake-rest-client';
import { GithubRestClient } from '@/infrastructure/rest/github-rest-client';
import { GithubService } from '@/infrastructure/services/github/github-service';

describe('fetch user self', () => {
  let githubService: GithubService;

  beforeEach(() => {
    githubService = new GithubService(
      new GithubRestClient(FakeRestClient.create(), null),
    );
  });

  test('Users', async () => {
    const users = await githubService.user.self();

    assert.strictEqual(users[0].id, 1);
  });
});
