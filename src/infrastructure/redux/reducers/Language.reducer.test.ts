import { assert } from 'chai';

import { SetLanguageAction } from '../actions/SetLanguage.action';
import { languageReducer } from './Language.reducer';

describe('Language Reducer', () => {
  test('INITIAL_STATE language is blank string', () => {
    const action = { type: undefined };
    const initialState = '';

    assert.equal(languageReducer(undefined, action), initialState);
  });

  test('SET_LANGUAGE updates the language reducer properly', () => {
    const action = SetLanguageAction('javascript');
    const expectedState = 'javascript';

    assert.equal(languageReducer(undefined, action), expectedState);
  });
});
