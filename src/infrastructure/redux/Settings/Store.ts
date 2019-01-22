import { RemoteSource } from '@/infrastructure/redux/Interfaces';
import { UserEntity } from '@/models/User.entity';

export interface AccessTokenStore extends RemoteSource {
  accessToken?: string;
}

export interface UserStore extends RemoteSource {
  user?: UserEntity;
}

export interface SettingsStore {
  github?: {
    accessToken?: AccessTokenStore;
    user?: UserStore;
  };
}
