import { assert } from 'chai';

import { DummyUserEntity } from '@/renderer/model/_tests/Dummy';
import { ClearGithubAccessTokenAction } from '@/renderer/store/Settings/actions/ClearGithubAccessTokenAction';
import { SettingsReducer } from '@/renderer/store/Settings/Reducer';

describe('SetGithubAccessToken', () => {
  test('CLEAR_ACCESS_TOKEN updates the accessToken reducer properly', () => {
    const action = ClearGithubAccessTokenAction();
    const state = SettingsReducer({
      github: {
        accessToken: 'dummy-access-token-24f45',
        user: {
          loading: false,
          loaded: true,
          user: DummyUserEntity(),
        },
      },
    }, action);
    assert.deepStrictEqual(state, {});
  });
});
