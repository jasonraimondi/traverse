import { assert } from 'chai';

import { StargazerReducer } from '@/renderer/store/Stargazer/Reducer';

describe('StargazerReducer', () => {
  test('TRENDING_INITIAL_STATE is correct', () => {
    const action = { type: undefined };
    const actual = StargazerReducer(undefined, action);

    const initialState = {
      loaded: false,
      loading: false,
      repositoryList: {},
      stargazerList: {},
    };
    assert.deepStrictEqual(actual, initialState);
  });
});
