import { assert } from 'chai';
import configureStore from 'redux-mock-store';

import { SetLanguageAction } from '@/infrastructure/redux/actions/SetLanguage.action';

const mockStore = configureStore();
const INITIAL_STATE = {
  language: 'all',
};
const store = mockStore(INITIAL_STATE);

describe('SetLanguageAction', () => {
  test('SetLanguageAction is dispatched correctly', () => {
    const language = {
      value: 'typescript',
      title: 'TypeScript',
    };
    const expectedActions = [SetLanguageAction(language)];

    store.dispatch(SetLanguageAction(language));

    assert.deepStrictEqual(store.getActions(), expectedActions);
  });
});
