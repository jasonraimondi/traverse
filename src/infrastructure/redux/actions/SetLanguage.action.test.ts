import configureStore from 'redux-mock-store';

import { SET_LANGUAGE, SetLanguageAction } from './SetLanguage.action';

const mockStore = configureStore();
const INITIAL_STATE = {
  language: 'all',
};
const store = mockStore(INITIAL_STATE);

describe('SetLanguageAction', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('set language is dispatched correctly', () => {
    const expectedActions = [{
      type: SET_LANGUAGE,
      payload: 'typescript',
    }];
    store.dispatch(SetLanguageAction('typescript'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
