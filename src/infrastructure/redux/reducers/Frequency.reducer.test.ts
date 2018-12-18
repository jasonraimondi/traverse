import { assert } from 'chai';

import { SetFrequencyAction } from '@/Infrastructure/redux/actions/SetFrequency.action';
import { frequencyReducer } from '@/Infrastructure/redux/reducers/Frequency.reducer';

describe('Frequency Reducer', () => {
  test('INITIAL_STATE is set to weekly', () => {
    const action = { type: undefined };
    const initialState = 'weekly';

    assert.strictEqual(frequencyReducer(undefined, action), initialState);
  });

  test('SET_FREQUENCY updates the frequency reducer properly', () => {
    const action = SetFrequencyAction('monthly');
    const expectedState = 'monthly';

    assert.strictEqual(frequencyReducer(undefined, action), expectedState);
  });
});
