import { assert } from 'chai';

import { TrendingReducer } from '@/infrastructure/redux/Trending/Reducer';
import { TrendingStore } from '@/infrastructure/redux/Trending/Store';

let initialState: TrendingStore;

describe('StargazerReducer', () => {
  beforeEach(() => {
    initialState = {
      options: {
        language: {
          title: 'TypeScript',
          value: 'typescript',
        },
        frequency: 'weekly',
        list: 'popular',
      },
      data: {
        loading: false,
        loaded: false,
      },
    };
  });

  test('TRENDING_INITIAL_STATE is set', () => {
    const expected = TrendingReducer(undefined, { type: undefined });
    assert.deepStrictEqual(expected, initialState);
  });
});
