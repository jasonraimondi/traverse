import { ClearGithubAccessTokenAction } from '@/infrastructure/redux/Settings/actions/ClearGithubAccessTokenAction';
import { SetGithubAccessTokenSuccessAction } from '@/infrastructure/redux/Settings/actions/SetGithubAccessTokenAction';
import { SettingsReducer } from '@/infrastructure/redux/Settings/Reducer';
import { UserEntity } from '@/models/User.entity';
import { assert } from 'chai';

describe('LanguageDetail Reducer', () => {
  test('INITIAL_STATE accessToken is blank string', () => {
    const action = { type: undefined };
    const initialState = {};

    assert.deepStrictEqual(SettingsReducer(undefined, action), initialState);
  });

  test('SET_ACCESS_TOKEN_SUCCESS updates the accessToken reducer properly', () => {
    const accessToken = 'dummy-access-token-24f46';
    const action = SetGithubAccessTokenSuccessAction({
      token: accessToken,
      user: new UserEntity(1),
    });

    const expected = SettingsReducer(undefined, action);

    assert.strictEqual(expected.github.accessToken.accessToken, accessToken);
  });

  test('CLEAR_ACCESS_TOKEN updates the accessToken reducer properly', () => {
    const action = ClearGithubAccessTokenAction();

    const state = SettingsReducer({
      github: {
        accessToken: {
          accessToken: 'dummy-access-token-24f45',
          loading: true,
          loaded: false,
        },
      },
    }, action);

    assert.deepStrictEqual(state, {});
  });
});
