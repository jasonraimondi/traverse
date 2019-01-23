import { assert } from 'chai';
import 'reflect-metadata';

import { FakeRestClient } from '@/renderer/infrastructure/rest/_tests/FakeRestClient';
import { GithubRestClient } from '@/renderer/infrastructure/rest/GithubRestClient';
import { GithubService } from '@/renderer/infrastructure/services/github/GithubService';

describe('fetch user self', () => {
  let githubService: GithubService;

  beforeEach(() => {
    githubService = new GithubService(
      new GithubRestClient(
        FakeRestClient.create(),
      ),
    );
  });

  test('github list starred repositories', async () => {
    const users = await githubService.user.listStarred('jasonraimondi');
    assert.strictEqual(users[0].id, 94367677);
    assert.strictEqual(users[0].attributes.name, 'formik');
    assert.strictEqual(users[0].attributes.owner.login, 'jaredpalmer');
  });

  test('github user detail', async () => {
    const users = await githubService.user.getUserDetail('jasonraimondi');
    assert.strictEqual(users.id, 5787967);
    assert.strictEqual(users.attributes.login, 'jasonraimondi');
    assert.strictEqual(users.attributes.name, 'Jason Raimondi');
    assert.strictEqual(users.attributes.avatarUrl, 'https://avatars3.githubusercontent.com/u/5787967?v=4');
    assert.strictEqual(users.attributes.htmlUrl, 'https://github.com/jasonraimondi');
  });
});
