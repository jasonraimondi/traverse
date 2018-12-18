import { assert } from 'chai';
import { createStore } from 'redux';

import { rootReducer } from './rootReducer';

describe('rootReducer.ts', () => {
  test('rootReducer is initialized', () => {
    const store = createStore(rootReducer);

    assert.strictEqual(store.getState().language, '');
    assert.strictEqual(store.getState().frequency, 'weekly');
    assert.deepStrictEqual(store.getState().repositoryList, {});
  });
});
