import { RepositoryEntity } from '@/renderer/infrastructure/model/Repository.entity';
import { UserEntity } from '@/renderer/infrastructure/model/User.entity';
import { RemoteSource, TrackUpdateSource } from '@/renderer/store/Interfaces';

export interface StargazerDetailStore {
  user: UserEntity;
  stargazerRepositoryList: RepositoryEntity[];
}

export interface StargazerStore extends RemoteSource {
  stargazerList: {
    [login: string]: TrackUpdateSource<UserEntity>;
  };
  repositoryList: {
    [login: string]: TrackUpdateSource<StargazerDetailStore>,
  };
}
