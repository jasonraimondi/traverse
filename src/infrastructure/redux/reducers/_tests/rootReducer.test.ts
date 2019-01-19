import { assert } from 'chai';
import { createStore } from 'redux';

import { rootReducer } from '@/infrastructure/redux/reducers/rootReducer';

describe('rootReducer.ts', () => {
  test('rootReducer is initialized', () => {
    const store = createStore(rootReducer);

    assert.deepStrictEqual(store.getState().language, { title: 'TypeScript', value: 'typescript'} );
    assert.strictEqual(store.getState().frequency, 'weekly');
    assert.deepStrictEqual(store.getState().trendingRepositoryList, {});
  });
});
