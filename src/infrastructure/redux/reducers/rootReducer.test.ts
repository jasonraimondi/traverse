import { createStore } from 'redux';

import { rootReducer } from './rootReducer';

describe('rootReducer.ts', () => {
  test('rootReducer is initialized', () => {
    const store = createStore(rootReducer);
    expect(store.getState().language).toEqual('');
    expect(store.getState().frequency).toEqual('weekly');
    expect(store.getState().repositoryList).toEqual({});
  });
});
