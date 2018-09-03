import { setLanguageAction } from '../actions/setLanguage.action';
import { languageReducer } from './Language.reducer';

describe('Language Reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: undefined };
      const initialState = 'all';
      expect(languageReducer(undefined, action)).toEqual(initialState);
    });
  });
  describe('SET_LANGUAGE', () => {
    test('returns the correct state', () => {
      const action = setLanguageAction('javascript');
      const expectedState = 'javascript';
      expect(languageReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
