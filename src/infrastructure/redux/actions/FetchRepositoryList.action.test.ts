import { assert } from 'chai';
import configureStore from 'redux-mock-store';

import {
  FetchRepositoryListAction,
  FetchRepositoryListActionFields, FetchRepositoryListFailureAction,
} from './FetchRepositoryList.action';

const mockStore = configureStore();
const INITIAL_STATE = {
  repositoryList: [],
};
const store = mockStore(INITIAL_STATE);

describe('FetchRepositoryListAction', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('FetchRepositoryListAction is dispatched correctly', () => {
    const fields = {
      frequency: 'weekly',
      language: 'typescript',
    } as FetchRepositoryListActionFields;
    const expectedActions = [FetchRepositoryListAction(fields)];
    store.dispatch(FetchRepositoryListAction(fields));
    assert.deepEqual(store.getActions(), expectedActions);
  });

  test('FetchRepositoryListFailureAction returns error', () => {
    const errorMessage = 'I failed!';
    const expectedActions = [FetchRepositoryListFailureAction(errorMessage)];
    store.dispatch(FetchRepositoryListFailureAction(errorMessage));
    assert.deepEqual(store.getActions(), expectedActions);
  });
});
