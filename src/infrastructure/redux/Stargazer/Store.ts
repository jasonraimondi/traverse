import { RemoteSource } from '@/infrastructure/redux/Interfaces';
import { RepositoryEntity } from '@/models/Repository.entity';
import { UserEntity } from '@/models/User.entity';

export interface UserListStore extends RemoteSource {
  list?: {
    [login: string]: UserEntity[];
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
