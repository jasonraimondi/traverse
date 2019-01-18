import { RestClientInterface } from '@/infrastructure/rest/AxiosRestClient';
import { Order } from '@/infrastructure/services/github/search/Search';
import { RepositoryEntity } from '@/models/Repository.entity';
import { UserEntity } from '@/models/User.entity';

type StarredRepositorySort = 'created';

export class User {
  constructor(private restClient: RestClientInterface) {
  }

  async listStarred(
    username: string,
    sort: StarredRepositorySort = 'created',
    order: Order = 'desc',
  ): Promise<RepositoryEntity[]> {
    const search = await this.restClient.get(`/users/${username}/starred`, { sort, order });

    if (search.status === 200) {
      return search.data.map((response) => RepositoryEntity.fromResponse(response));
    }

    return [];
  }

  async starRepository(username: string, repository: string) {
    const response = await this.restClient.put(`/user/starred/${username}/${repository}`);
    return response.status === 204;
  }

  async unstarRepository(username: string, repository: string) {
    const response = await this.restClient.delete(`/user/starred/${username}/${repository}`);
    return response.status === 204;
  }

  async getUserDetail(username: string): Promise<UserEntity> {
    const search = await this.restClient.get(`/users/${username}`, {});

    if (search.status === 200) {
      return UserEntity.fromResponse(search.data);
    }

    throw Error('user not found');
  }
}
