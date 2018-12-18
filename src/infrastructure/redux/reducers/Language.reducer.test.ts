import { assert } from 'chai';

import { SetLanguageAction } from '@/infrastructure/redux/actions/SetLanguage.action';
import { languageReducer } from '@/infrastructure/redux/reducers/Language.reducer';

describe('Language Reducer', () => {
  test('INITIAL_STATE language is blank string', () => {
    const action = { type: undefined };
    const initialState = '';

    assert.strictEqual(languageReducer(undefined, action), initialState);
  });

  test('SET_LANGUAGE updates the language reducer properly', () => {
    const action = SetLanguageAction('javascript');
    const expectedState = 'javascript';

    assert.strictEqual(languageReducer(undefined, action), expectedState);
  });
});
