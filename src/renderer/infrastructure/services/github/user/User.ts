import { RepositoryEntity } from '@/renderer/infrastructure/model/Repository.entity';
import { UserEntity } from '@/renderer/infrastructure/model/User.entity';
import { RestClientInterface } from '@/renderer/infrastructure/rest/AxiosRestClient';
import { Order } from '@/renderer/infrastructure/services/github/search/Search';

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

  async self(): Promise<UserEntity|false> {
    const response = await this.restClient.get('/user');
    if (response.status === 200) {
      return UserEntity.fromResponse(response.data);
    }
    return false;
  }

  // async starRepository(username: string, repository: string) {
  //   const response = await this.restClient.put(`/user/starred/${username}/${repository}`);
  //   return response.status === 204;
  // }
  //
  // async unstarRepository(username: string, repository: string) {
  //   const response = await this.restClient.delete(`/user/starred/${username}/${repository}`);
  //   return response.status === 204;
  // }

  async getUserDetail(username: string): Promise<UserEntity> {
    const search = await this.restClient.get(`/users/${username}`, {});

    if (search.status === 200) {
      return UserEntity.fromResponse(search.data);
    }

    throw Error('user not found');
  }
}
