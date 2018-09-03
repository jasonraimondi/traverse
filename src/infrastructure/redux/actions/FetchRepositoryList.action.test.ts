import configureStore from 'redux-mock-store';
import { FETCH_REPOSITORY_LIST, FetchRepositoryListAction } from './FetchRepositoryList.action';

const mockStore = configureStore();
const INITIAL_STATE = {
  repositoryList: [],
};
const store = mockStore(INITIAL_STATE);

describe('FetchRepositoryListAction', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('set language is dispatched correctly', () => {
    const expectedActions = [{
      type: FETCH_REPOSITORY_LIST,
      payload: {
        frequency: 'weekly',
        language: 'typescript',
      },
    }];
    store.dispatch(FetchRepositoryListAction({
      frequency: 'weekly',
      language: 'typescript',
    }));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
