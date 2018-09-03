import configureStore from 'redux-mock-store';

import { SET_FREQUENCY, setFrequencyAction } from './setFrequencyAction';

const mockStore = configureStore();
const INITIAL_STATE = {
  frequency: 'weekly',
};
const store = mockStore(INITIAL_STATE);

describe('setFrequencyAction', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('set frequency is dispatched correctly', () => {
    const expectedActions = [{
      type: SET_FREQUENCY,
      payload: 'monthly',
    }];
    store.dispatch(setFrequencyAction('monthly'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
