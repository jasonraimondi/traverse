import { SetGithubAccessTokenAction } from '@/infrastructure/redux/actions/SetGithubAccessToken.action';
import { assert } from 'chai';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const INITIAL_STATE = {
  githubAccessToken: 'abcdefg',
};
const store = mockStore(INITIAL_STATE);

describe('SetGithubAccessTokenAction', () => {
  test('SetGithubAccessTokenAction is dispatched correctly', () => {
    const newToken = '123456';
    const setTokenAction = SetGithubAccessTokenAction(newToken);

    store.dispatch(setTokenAction);

    assert.deepStrictEqual(store.getActions(), [setTokenAction]);
  });
});
