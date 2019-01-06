import { assert } from 'chai';

import { SetLanguageAction } from '@/infrastructure/redux/actions/SetLanguage.action';
import { languageReducer } from '@/infrastructure/redux/reducers/Language.reducer';

describe('LanguageDetail Reducer', () => {
  test('INITIAL_STATE language is blank string', () => {
    const action = { type: undefined };
    const initialState = { title: 'TypeScript', value: 'typescript'};

    assert.deepStrictEqual(languageReducer(undefined, action), initialState);
  });

  test('SET_LANGUAGE updates the language reducer properly', () => {
    const language = { value: 'javascript', title: 'Javascript' };
    const action = SetLanguageAction(language);

    assert.strictEqual(languageReducer(undefined, action), language);
  });
});
