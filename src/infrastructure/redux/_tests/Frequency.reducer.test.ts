import { assert } from 'chai';

import { SetFrequencyAction } from '@/infrastructure/redux/actions/SetFrequencyAction';
import { frequencyReducer } from '@/infrastructure/redux/reducers/Frequency.reducer';

describe('FrequencyPicker Reducer', () => {
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
