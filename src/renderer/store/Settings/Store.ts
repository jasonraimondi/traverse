import { UserEntity } from '@/renderer/model/User.entity';
import { RemoteSource } from '@/renderer/store/Interfaces';

export interface UserStore extends RemoteSource {
  user?: UserEntity;
  login?: string;
}

export interface SettingsStore {
  github?: {
    accessToken: string;
    user: UserStore;
  };
}
