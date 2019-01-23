import {
  FETCH_TRENDING_REPOSITORY_LIST,
  FETCH_TRENDING_REPOSITORY_LIST_FAILURE,
  FETCH_TRENDING_REPOSITORY_LIST_SUCCESS,
} from '@/infrastructure/redux/Trending/actions/FetchTrendingRepositoryListAction';
import { SET_FREQUENCY } from '@/infrastructure/redux/Trending/actions/SetFrequencyAction';
import { SET_LANGUAGE } from '@/infrastructure/redux/Trending/actions/SetLanguageAction';
import { SET_LANGUAGE_LIST_TYPE } from '@/infrastructure/redux/Trending/actions/SetLanguageListTypeAction';
import { TrendingStore } from '@/infrastructure/redux/Trending/Store';

export const TRENDING_INITIAL_STATE: TrendingStore = {
  options: {
    language: {
      title: 'TypeScript',
      value: 'typescript',
    },
    frequency: 'weekly',
    list: 'popular',
  },
  data: {
    loading: false,
    loaded: false,
  },
};

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
      return {
        ...state,
        data: {
          ...state.data,
          loaded: false,
          loading: true,
        },
      };
    case FETCH_TRENDING_REPOSITORY_LIST_SUCCESS:
      return {
        ...state,
        data: {
          loaded: true,
          loading: false,
          list: {
            ...state.data.list,
            [action.payload.language.value]: {
              ...(state.data.list ? state.data.list[action.payload.language.value] : {}),
              [action.payload.frequency]: action.payload.data,
            },
          },
        },
      };
    case FETCH_TRENDING_REPOSITORY_LIST_FAILURE:
      return {
        ...state,
        data: {
          loaded: false,
          loading: false,
          list: {
            ...state.data.list,
            [action.payload.language.value]: {
              ...(state.data.list ? state.data.list[action.payload.language.value] : {}),
              [action.payload.frequency]: [],
            },
          },
        },
      };
    default:
      return state;
  }
};
