import { FETCH_TRENDING_REPOSITORY_LIST } from '@/infrastructure/redux/TrendingRepositoryList/actions/FetchTrendingRepositoryListAction';
import { SET_FREQUENCY } from '@/infrastructure/redux/TrendingRepositoryList/actions/SetFrequencyAction';
import { SET_LANGUAGE } from '@/infrastructure/redux/TrendingRepositoryList/actions/SetLanguageAction';
import { SET_LANGUAGE_LIST_TYPE } from '@/infrastructure/redux/TrendingRepositoryList/actions/SetLanguageListTypeAction';
import { TrendingRepositoryListStore } from '@/infrastructure/redux/TrendingRepositoryList/Store';

const INITIAL_STATE: TrendingRepositoryListStore = {
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
  data: {},
};

export const TrendingRepositoryListReducer = (state = INITIAL_STATE, action): TrendingRepositoryListStore => {
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
      return action.payload;
    default:
      return state;
  }
};
