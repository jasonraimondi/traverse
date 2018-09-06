import { SetFrequencyAction } from '../actions/SetFrequency.action';
import { frequencyReducer } from './Frequency.reducer';

describe('Frequency Reducer', () => {
  test('INITIAL_STATE is set to weekly', () => {
    const action = { type: undefined };
    const initialState = 'weekly';
    expect(frequencyReducer(undefined, action)).toEqual(initialState);
  });

  test('SET_FREQUENCY updates the frequency reducer properly', () => {
    const action = SetFrequencyAction('monthly');
    const expectedState = 'monthly';
    expect(frequencyReducer(undefined, action)).toEqual(expectedState);
  });
});
