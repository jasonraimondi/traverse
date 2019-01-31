import { ActionResponse } from '@/renderer/store/Interfaces';
import {
  FETCH_TRENDING_REPOSITORY_LIST,
  FETCH_TRENDING_REPOSITORY_LIST_FAILURE, FETCH_TRENDING_REPOSITORY_LIST_NO_ACTION,
  FETCH_TRENDING_REPOSITORY_LIST_SUCCESS, FetchTrendingRepositoryListActionFields,
} from '@/renderer/store/Trending/actions/FetchTrendingRepositoryListAction';
import { SET_FREQUENCY } from '@/renderer/store/Trending/actions/SetFrequencyAction';
import { SET_LANGUAGE } from '@/renderer/store/Trending/actions/SetLanguageAction';
import { SET_LANGUAGE_LIST_TYPE } from '@/renderer/store/Trending/actions/SetLanguageListTypeAction';
import { TrendingStore } from '@/renderer/store/Trending/Store';

export const TRENDING_INITIAL_STATE: TrendingStore = {
  options: {
    language: {
      title: 'TypeScript',
      value: 'typescript',
    },
    frequency: 'weekly',
    list: 'popular',
  },
  loading: false,
  loaded: false,
  repositoryList: {},
};

function FetchTrendingRepositoryListReducer(action: ActionResponse<FetchTrendingRepositoryListActionFields>, state) {
  const { language, frequency } = action.payload;
  return {
    ...state,
    options: {
      ...state.options,
      language,
      frequency,
    },
    loaded: false,
    loading: true,
  };
}

export const TrendingReducer = (state = TRENDING_INITIAL_STATE, action): TrendingStore => {
  switch (action.type) {
    case SET_LANGUAGE_LIST_TYPE:
      return {
        ...state,
        options: {
          ...state.options,
          list: action.payload,
        },
      };
    case SET_LANGUAGE:
      return {
        ...state,
        options: {
          ...state.options,
          language: action.payload,
        },
      };
    case SET_FREQUENCY:
      return {
        ...state,
        options: {
          ...state.options,
          frequency: action.payload,
        },
      };
    case FETCH_TRENDING_REPOSITORY_LIST:
      return FetchTrendingRepositoryListReducer(action, state);
    case FETCH_TRENDING_REPOSITORY_LIST_SUCCESS:
      const {language, frequency, data} = action.payload;
      return {
        ...state,
        loaded: true,
        loading: false,
        repositoryList: {
          ...state.repositoryList,
          [language.value]: {
            ...(state.repositoryList ? state.repositoryList[language.value] : {}),
            [frequency]: {
              lastUpdated: Date.now(),
              data,
            },
          },
        },
      };
    case FETCH_TRENDING_REPOSITORY_LIST_NO_ACTION:
      return {
        ...state,
        loaded: true,
        loading: false,
      };
    case FETCH_TRENDING_REPOSITORY_LIST_FAILURE:
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    default:
      return state;
  }
};
