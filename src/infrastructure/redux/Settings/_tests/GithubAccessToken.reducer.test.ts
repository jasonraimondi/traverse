import { assert } from 'chai';

describe('LanguageDetail Reducer', () => {
  test('INITIAL_STATE accessToken is blank string', () => {
    const action = { type: undefined };
    const initialState = null;

    assert.strictEqual(githubAccessTokenReducer(undefined, action), initialState);
  });

  test('SET_ACCESS_TOKEN_SUCCESS updates the accessToken reducer properly', () => {
    const accessToken = '12345';
    const action = SetGithubAccessTokenSuccessAction(accessToken);

    assert.strictEqual(githubAccessTokenReducer(undefined, action), accessToken);
  });

  test('CLEAR_ACCESS_TOKEN updates the accessToken reducer properly', () => {
    const action = ClearGithubAccessTokenAction();

    const state = githubAccessTokenReducer(undefined, action);

    assert.isNull(state);
  });
});
