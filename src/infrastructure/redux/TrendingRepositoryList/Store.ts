import { RepositoryList } from '@/app/elements/RepositoryList';
import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { ListType } from '@/app/TrendingRepos/components/LanguageListPicker';
import { RemoteSource } from '@/infrastructure/redux/Interfaces';
import { FrequencyType } from '@/models/Frequency.type';

export interface TrendingRepositoryListStore extends RemoteSource {
  options?: {
    language: ILanguage,
    frequency: FrequencyType,
    list: ListType,
  };
  data: {
    [language: string]: {
      [frequency: string]: RepositoryList[],
    };
  };
}
