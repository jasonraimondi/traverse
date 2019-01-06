import { serviceFactory } from '@/infrastructure/services/service-factory';

export async function validateGithubAccessToken(accessToken: string) {
  const search = await serviceFactory.githubClient.user.self();
  return search !== false;
}
