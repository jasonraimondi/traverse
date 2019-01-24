import { RepositoryEntity } from '@/renderer/model/Repository.entity';
import { UserEntity } from '@/renderer/model/User.entity';
import { RemoteSource } from '@/renderer/store/Interfaces';

export interface UserListStore extends RemoteSource {
  list?: {
    [login: string]: UserEntity;
  };
}

export interface StargazerRepositoryListStore extends RemoteSource {
  list?: {
    [login: string]: RepositoryEntity[];
  };
}

export interface StargazerStore {
  currentUserLogin?: string;
  userList: UserListStore;
  repositoryList: StargazerRepositoryListStore;
}
