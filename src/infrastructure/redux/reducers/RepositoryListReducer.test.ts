import { repositoryListReducer } from './RepositoryListReducer';

describe('RepositoryList Reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: undefined };
      const initialState = {};
      expect(repositoryListReducer(undefined, action)).toEqual(initialState);
    });
  });
});
