import { SET_FREQUENCY, setFrequencyAction } from '../actions/setFrequencyAction';
import { frequencyReducer } from './FrequencyReducer';

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
      const action = setFrequencyAction('monthly');
      const expectedState = 'monthly';
      expect(frequencyReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
