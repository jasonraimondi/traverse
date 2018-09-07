import { assert } from 'chai';

import { SetFrequencyAction } from '../actions/SetFrequency.action';
import { frequencyReducer } from './Frequency.reducer';

describe('Frequency Reducer', () => {
  test('INITIAL_STATE is set to weekly', () => {
    const action = { type: undefined };
    const initialState = 'weekly';

    assert.equal(frequencyReducer(undefined, action), initialState);
  });

  test('SET_FREQUENCY updates the frequency reducer properly', () => {
    const action = SetFrequencyAction('monthly');
    const expectedState = 'monthly';

    assert.equal(frequencyReducer(undefined, action), expectedState);
  });
});
