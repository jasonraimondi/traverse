import { ILanguage } from '@/renderer/app/TrendingRepos/components/LanguageList';
import { ListType } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { FrequencyType } from '@/renderer/model/Frequency.type';
import { RepositoryEntity } from '@/renderer/model/Repository.entity';
import { RemoteSource } from '@/renderer/store/Interfaces';

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
