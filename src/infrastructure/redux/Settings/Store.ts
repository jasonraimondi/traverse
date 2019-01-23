import { RemoteSource } from '@/infrastructure/redux/Interfaces';
import { UserEntity } from '@/models/User.entity';

export interface UserStore extends RemoteSource {
  user?: UserEntity;
}

export interface SettingsStore {
  github?: {
    accessToken?: string;
    user: UserStore;
  };
}
