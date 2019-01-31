import { store } from '@/renderer';

const updateCheck = 1000 * 60 * 5; // five minutes

export function StargazerUserLastUpdated(login: string) {
  const stargazer = store.getState().stargazer;
  const lastUpdated = stargazer.stargazerList
    && stargazer.stargazerList[login]
    && stargazer.stargazerList[login]
    && Date.now() - stargazer.stargazerList[login].lastUpdated;
  const hasBeenUpdatedRecently = lastUpdated < updateCheck;
  return {
    updateCheck,
    lastUpdated,
    hasBeenUpdatedRecently,
  };
}

export function StargazerRepositoryListLastUpdated(login: string) {
  const stargazer = store.getState().stargazer;
  const lastUpdated = stargazer.repositoryList
    && stargazer.repositoryList[login]
    && stargazer.repositoryList[login]
    && Date.now() - stargazer.repositoryList[login].lastUpdated;
  const hasBeenUpdatedRecently = lastUpdated < updateCheck;
  return {
    updateCheck,
    lastUpdated,
    hasBeenUpdatedRecently,
  };
}
