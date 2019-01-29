import { RepositoryEntity } from '@/renderer/model/Repository.entity';
import { UserEntity } from '@/renderer/model/User.entity';
import { RemoteSource } from '@/renderer/store/Interfaces';

export interface StargazerDetailStore {
  user: UserEntity;
  stargazerRepositoryList: RepositoryEntity[];
}

export interface StargazerStore extends RemoteSource {
  stargazerList: {
    [login: string]: UserEntity;
  };
  repositoryList: {
    [login: string]: StargazerDetailStore,
  };
}
