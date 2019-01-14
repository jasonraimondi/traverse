import { assert } from 'chai';

import { ClearGithubAccessTokenAction } from '@/infrastructure/redux/actions/ClearGithubAccessTokenAction';
import { SetGithubAccessTokenSuccessAction } from '@/infrastructure/redux/actions/SetGithubAccessTokenAction';
import { githubAccessTokenReducer } from '@/infrastructure/redux/reducers/GithubAccessToken.reducer';

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
