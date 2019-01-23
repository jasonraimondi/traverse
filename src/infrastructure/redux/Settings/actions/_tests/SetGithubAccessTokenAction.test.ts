import { assert } from 'chai';

import { SetGithubAccessTokenSuccessAction } from '@/infrastructure/redux/Settings/actions/SetGithubAccessTokenAction';
import { SettingsReducer } from '@/infrastructure/redux/Settings/Reducer';
import { UserEntity } from '@/models/User.entity';

describe('SetGithubAccessToken', () => {
  test('SET_ACCESS_TOKEN_SUCCESS executes', () => {
    const accessToken = 'dummy-access-token-24f46';
    const action = SetGithubAccessTokenSuccessAction({
      token: accessToken,
      user: new UserEntity(1),
    });

    const expected = SettingsReducer(undefined, action);

    assert.strictEqual(expected.github.accessToken.accessToken, accessToken);
  });
});
