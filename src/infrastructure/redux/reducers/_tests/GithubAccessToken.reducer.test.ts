import { ClearGithubAccessTokenAction } from '@/infrastructure/redux/actions/ClearGithubAccessToken.action';
import { SetGithubAccessTokenSuccessAction } from '@/infrastructure/redux/actions/SetGithubAccessToken.action';
import { githubAccessTokenReducer } from '@/infrastructure/redux/reducers/GithubAccessToken.reducer';
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
    const accessToken = null;
    const action = ClearGithubAccessTokenAction();

    assert.strictEqual(githubAccessTokenReducer(undefined, action), accessToken);
  });
});
