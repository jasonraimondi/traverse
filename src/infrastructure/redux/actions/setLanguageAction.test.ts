import configureStore from 'redux-mock-store';

import { SET_LANGUAGE, setLanguageAction } from './setLanguageAction';

const mockStore = configureStore();
const INITIAL_STATE = {
  language: 'all',
};
const store = mockStore(INITIAL_STATE);

describe('setLanguageAction', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('set language is dispatched correctly', () => {
    const expectedActions = [{
      type: SET_LANGUAGE,
      payload: 'typescript',
    }];
    store.dispatch(setLanguageAction('typescript'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
