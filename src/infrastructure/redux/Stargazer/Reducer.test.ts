import { assert } from 'chai';

import { StargazerReducer } from '@/infrastructure/redux/Stargazer/Reducer';

describe('StargazerReducer', () => {
  test('TRENDING_INITIAL_STATE is correct', () => {
    const action = { type: undefined };
    const actual = StargazerReducer(undefined, action);

    const initialState = {
      userList: {
        loaded: false,
        loading: false,
      },
      repositoryList: {
        loaded: false,
        loading: false,
      },
    };
    assert.deepStrictEqual(actual, initialState);
  });
});
