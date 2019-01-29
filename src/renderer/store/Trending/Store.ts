import { ILanguage } from '@/renderer/app/TrendingRepos/components/LanguageList';
import { ListType } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { FrequencyType } from '@/renderer/model/Frequency.type';
import { RepositoryEntity } from '@/renderer/model/Repository.entity';
import { RemoteSource, TrackUpdateSource } from '@/renderer/store/Interfaces';

export interface TrendingRepositoryStore {
  [language: string]: {
    [frequency: string]: TrackUpdateSource<RepositoryEntity[]>,
  };
}

export interface TrendingStore extends RemoteSource {
  options: {
    language: ILanguage,
    frequency: FrequencyType,
    list: ListType,
  };
  list?: TrendingRepositoryStore;
}
