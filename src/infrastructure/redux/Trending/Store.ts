import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { ListType } from '@/app/TrendingRepos/components/LanguageListPicker';
import { RemoteSource } from '@/infrastructure/redux/Interfaces';
import { FrequencyType } from '@/models/Frequency.type';
import { RepositoryEntity } from '@/models/Repository.entity';

interface TrendingRepositoryListStore {
  [language: string]: {
    [frequency: string]: {
      lastUpdated: number,
      list: RepositoryEntity[],
    },
  };
}

export interface TrendingStore extends RemoteSource {
  options: {
    language: ILanguage,
    frequency: FrequencyType,
    list: ListType,
  };
  list?: TrendingRepositoryListStore;
}
