import configureStore from 'redux-mock-store';
import { FETCH_REPOSITORY_LIST, fetchRepositoryListAction } from './fetchRepositoryListAction';

const mockStore = configureStore();
const INITIAL_STATE = {
  repositoryList: [],
};
const store = mockStore(INITIAL_STATE);

describe('fetchRepositoryListAction', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('set language is dispatched correctly', () => {
    const expectedActions = [{
      type: FETCH_REPOSITORY_LIST,
      payload: {},
    }];
    store.dispatch(fetchRepositoryListAction('weekly', 'typescript'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
