import { DummyUserEntity } from '@/renderer/model/_tests/Dummy';
import { assert } from 'chai';

import { SetGithubAccessTokenSuccessAction } from '@/renderer/store/Settings/actions/SetGithubAccessTokenAction';
import { SettingsReducer } from '@/renderer/store/Settings/Reducer';

describe('SetGithubAccessToken', () => {
  test('SET_ACCESS_TOKEN_SUCCESS executes', () => {
    const user = DummyUserEntity();
    const accessToken = 'dummy-access-token-24f46';
    const action = SetGithubAccessTokenSuccessAction({
      token: accessToken,
      user,
    });

    const expected = SettingsReducer(undefined, action);

    assert.strictEqual(expected.github.accessToken, accessToken);
    assert.deepStrictEqual(expected.github.user.user, user);
    assert.strictEqual(expected.github.user.login, user.attributes.login);
  });
});
