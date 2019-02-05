import { assert } from 'chai';
import 'reflect-metadata';

import { FakeRestClient } from '@/renderer/infrastructure/rest/_tests/FakeRestClient';
import { User } from '@/renderer/infrastructure/services/github/user/User';

describe('fetch user self', () => {
  let user: User;

  beforeEach(() => {
    user = new User(FakeRestClient.create());
  });

  test('github selectedTrend starred repositories', async () => {
    const users = await user.listStarred('jasonraimondi');
    assert.strictEqual(users[0].id, 94367677);
    assert.strictEqual(users[0].attributes.name, 'formik');
    assert.strictEqual(users[0].attributes.owner.login, 'jaredpalmer');
  });

  test('github user detail', async () => {
    const users = await user.getUserDetail('jasonraimondi');
    assert.strictEqual(users.id, 5787967);
    assert.strictEqual(users.attributes.login, 'jasonraimondi');
    assert.strictEqual(users.attributes.name, 'Jason Raimondi');
    assert.strictEqual(users.attributes.avatarUrl, 'https://avatars3.githubusercontent.com/u/5787967?v=4');
    assert.strictEqual(users.attributes.htmlUrl, 'https://github.com/jasonraimondi');
  });
});
