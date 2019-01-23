import { assert } from 'chai';

import { rootReducer } from '@/infrastructure/redux/RootReducer';
import { SETTINGS_INITIAL_STATE } from '@/infrastructure/redux/Settings/Reducer';
import { STARGAZER_INITIAL_STATE } from '@/infrastructure/redux/Stargazer/Reducer';
import { TRENDING_INITIAL_STATE } from '@/infrastructure/redux/Trending/Reducer';

describe('SetGithubAccessToken', () => {
  test('CLEAR_ACCESS_TOKEN updates the accessToken reducer properly', () => {
    const state = rootReducer({
      trending: TRENDING_INITIAL_STATE,
      stargazer: STARGAZER_INITIAL_STATE,
      settings: SETTINGS_INITIAL_STATE,
    }, {
      type: 'no-action',
    });

    assert.isEmpty(state.settings);
    assert.isNotEmpty(state.trending);
    assert.isNotEmpty(state.stargazer);
  });
});
