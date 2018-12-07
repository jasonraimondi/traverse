import { assert } from 'chai';
import configureStore from 'redux-mock-store';

import { FrequencyType } from '../../../models/Frequency.type';
import { SetFrequencyAction } from './SetFrequency.action';

const mockStore = configureStore();
const INITIAL_STATE = {
  frequency: 'weekly',
};
const store = mockStore(INITIAL_STATE);

describe('SetFrequencyAction', () => {
  test('SetFrequencyAction is dispatched correctly', () => {
    const frequency: FrequencyType = 'monthly';
    const expectedActions = [SetFrequencyAction(frequency)];

    store.dispatch(SetFrequencyAction(frequency));

    assert.deepStrictEqual(store.getActions(), expectedActions);
  });
});
