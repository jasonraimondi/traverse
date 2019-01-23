import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { ListType } from '@/app/TrendingRepos/components/LanguageListPicker';
import { RemoteSource } from '@/infrastructure/redux/Interfaces';
import { FrequencyType } from '@/models/Frequency.type';
import { RepositoryEntity } from '@/models/Repository.entity';

interface TrendingRepositoryListStore extends RemoteSource {
  list?: {
    [language: string]: {
      [frequency: string]: RepositoryEntity[],
    };
  };
}

export interface TrendingStore {
  options?: {
    language: ILanguage,
    frequency: FrequencyType,
    list: ListType,
  };
  data: TrendingRepositoryListStore;
}
