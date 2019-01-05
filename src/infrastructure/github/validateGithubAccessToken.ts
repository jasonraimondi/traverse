import axios from 'axios';

import { GitHubRest } from '@/infrastructure/github/GitHubRest';

export async function validateGithubAccessToken(accessToken: string) {
  const githubRest = GitHubRest(
    '/user',
    undefined,
    undefined,
    accessToken,
  );
  const search = await axios.get(githubRest.url, githubRest.config).catch((err) => console.log(err));
  if (search) {
    return search.status < 300;
  }
  return false;
}
