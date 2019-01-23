import { assert } from 'chai';

import { SettingsReducer } from '@/renderer/store/Settings/Reducer';

describe('LanguageDetail Reducer', () => {
  test('TRENDING_INITIAL_STATE accessToken is blank string', () => {
    const action = { type: undefined };
    const initialState = {};

    assert.deepStrictEqual(SettingsReducer(undefined, action), initialState);
  });
});
