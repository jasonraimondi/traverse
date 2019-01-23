import { assert } from 'chai';

import { TrendingReducer } from '@/renderer/store/Trending/Reducer';
import { TrendingStore } from '@/renderer/store/Trending/Store';

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
      loading: false,
      loaded: false,
    };
  });

  test('TRENDING_INITIAL_STATE is set', () => {
    const expected = TrendingReducer(undefined, { type: undefined });
    assert.deepStrictEqual(expected, initialState);
  });
});
