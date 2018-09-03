import configureStore from 'redux-mock-store';

import { SET_FREQUENCY, SetFrequencyAction } from './SetFrequency.action';

const mockStore = configureStore();
const INITIAL_STATE = {
  frequency: 'weekly',
};
const store = mockStore(INITIAL_STATE);

describe('SetFrequencyAction', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('set frequency is dispatched correctly', () => {
    const expectedActions = [{
      type: SET_FREQUENCY,
      payload: 'monthly',
    }];
    store.dispatch(SetFrequencyAction('monthly'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
