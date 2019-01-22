import { RemoteSource } from '@/infrastructure/redux/Interfaces';
import { RepositoryEntity } from '@/models/Repository.entity';
import { UserEntity } from '@/models/User.entity';

export interface StargazerRepositoryListStore extends RemoteSource {
  currentUserId: string | null;
  userList: {
    [login: string]: UserEntity,
  };
  repositoryList: {
    [login: string]: RepositoryEntity,
  };
}
