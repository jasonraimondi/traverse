import { assert } from 'chai';

import { UserEntity } from '@/renderer/model/User.entity';
import { SetGithubAccessTokenSuccessAction } from '@/renderer/store/Settings/actions/SetGithubAccessTokenAction';
import { SettingsReducer } from '@/renderer/store/Settings/Reducer';

describe('SetGithubAccessToken', () => {
  test('SET_ACCESS_TOKEN_SUCCESS executes', () => {
    const accessToken = 'dummy-access-token-24f46';
    const action = SetGithubAccessTokenSuccessAction({
      token: accessToken,
      user: new UserEntity(1),
    });

    const expected = SettingsReducer(undefined, action);

    assert.strictEqual(expected.github.accessToken, accessToken);
  });
});
