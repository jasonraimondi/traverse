import { store } from '@/renderer';
import { ILanguage } from '@/renderer/app/TrendingRepos/components/LanguageList';
import { FrequencyType } from '@/renderer/infrastructure/model/Frequency.type';

const updateCheck = 1000 * 60 * 5; // five minutes

export function TrendingLastUpdated(language: ILanguage, frequency: FrequencyType) {
  const trending = store.getState().trending;
  const lastUpdated = trending.repositoryList
    && trending.repositoryList[language.value]
    && trending.repositoryList[language.value][frequency]
    && Date.now() - trending.repositoryList[language.value][frequency].lastUpdated;
  const hasBeenUpdatedRecently = lastUpdated < updateCheck;
  return {
    updateCheck,
    lastUpdated,
    hasBeenUpdatedRecently,
  };
}
