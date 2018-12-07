import { assert } from 'chai';
import { createStore } from 'redux';

import { rootReducer } from './rootReducer';

describe('rootReducer.ts', () => {
  test('rootReducer is initialized', () => {
    const store = createStore(rootReducer);

    assert.equal(store.getState().language, '');
    assert.equal(store.getState().frequency, 'weekly');
    assert.deepStrictEqual(store.getState().repositoryList, {});
  });
});
