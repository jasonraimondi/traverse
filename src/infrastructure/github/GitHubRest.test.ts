import { assert } from 'chai';
import { GitHubRest } from './GitHubRest';

describe('GitHubRest', () => {
  test('GitHubRest with additional params and headers', () => {
    const url = '/search/repositories';

    const githubRest = GitHubRest(url, {
      language: 'something',
    }, {
      Authorization: 'Bearer 123',
    }, 'fooy');

    assert.strictEqual(githubRest.url, `https://api.github.com${url}`);
    assert.deepStrictEqual(githubRest.config, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: 'Bearer 123',
      },
      params: {
        access_token: 'fooy',
        language: 'something',
      },
    });
  });

  test('GitHubRest with no params', () => {
    const url = '/search/repositories';

    const githubRest = GitHubRest(url);

    assert.strictEqual(githubRest.url, `https://api.github.com${url}`);
    assert.deepStrictEqual(githubRest.config, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      params: {},
    });
  });
});
