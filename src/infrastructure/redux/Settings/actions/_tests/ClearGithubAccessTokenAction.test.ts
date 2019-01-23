import { assert } from 'chai';

import { ClearGithubAccessTokenAction } from '@/infrastructure/redux/Settings/actions/ClearGithubAccessTokenAction';
import { SettingsReducer } from '@/infrastructure/redux/Settings/Reducer';

describe('SetGithubAccessToken', () => {
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
