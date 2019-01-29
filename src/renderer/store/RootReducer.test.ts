import { assert } from 'chai';

import { rootReducer } from '@/renderer/store/RootReducer';
import { SETTINGS_INITIAL_STATE } from '@/renderer/store/Settings/Reducer';
import { STARGAZER_INITIAL_STATE } from '@/renderer/store/Stargazer/Reducer';
import { TRENDING_INITIAL_STATE } from '@/renderer/store/Trending/Reducer';

describe('RootReducer', () => {
  test('root reducer initial state', () => {
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
