import { SET_FREQUENCY, SetFrequencyAction } from '../actions/SetFrequency.action';
import { frequencyReducer } from './Frequency.reducer';

describe('Frequency Reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: undefined };
      const initialState = 'weekly';
      expect(frequencyReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('SET_FREQUENCY', () => {
    test('returns the correct state', () => {
      const action = SetFrequencyAction('monthly');
      const expectedState = 'monthly';
      expect(frequencyReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
