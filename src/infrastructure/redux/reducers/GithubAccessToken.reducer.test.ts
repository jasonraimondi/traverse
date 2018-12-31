import { SetGithubAccessTokenAction } from '@/infrastructure/redux/actions/SetGithubAccessToken.action';
import { githubAccessTokenReducer } from '@/infrastructure/redux/reducers/GithubAccessToken.reducer';
import { assert } from 'chai';

describe('LanguageDetail Reducer', () => {
  test('INITIAL_STATE language is blank string', () => {
    const action = { type: undefined };
    const initialState = '';

    assert.strictEqual(githubAccessTokenReducer(undefined, action), initialState);
  });

  test('SET_LANGUAGE updates the language reducer properly', () => {
    const language = '12345';
    const action = SetGithubAccessTokenAction(language);

    assert.strictEqual(githubAccessTokenReducer(undefined, action), language);
  });
});
