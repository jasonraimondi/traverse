import { CLEAR_GITHUB_ACCESS_TOKEN } from '@/infrastructure/redux/Settings/actions/ClearGithubAccessTokenAction';
import {
  SET_GITHUB_ACCESS_TOKEN, SET_GITHUB_ACCESS_TOKEN_FAILURE,
  SET_GITHUB_ACCESS_TOKEN_SUCCESS,
} from '@/infrastructure/redux/Settings/actions/SetGithubAccessTokenAction';
import { SettingsStore } from '@/infrastructure/redux/Settings/Store';

const INITIAL_STATE: SettingsStore = {
};

export const SettingsReducer = (state = INITIAL_STATE, action): SettingsStore => {
  switch (action.type) {
    case SET_GITHUB_ACCESS_TOKEN:
      return {
        ...state,
        github: {
          ...state.github,
          accessToken: {
            loaded: false,
            loading: true,
          },
          user: {
            loaded: false,
            loading: true,
          },
        },
      };
    case SET_GITHUB_ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        github: {
          ...state.github,
          accessToken: {
            loaded: true,
            loading: false,
            accessToken: action.payload.token,
          },
          user: {
            loaded: true,
            loading: false,
            user: action.payload.user,
          },
        },
      };
    case SET_GITHUB_ACCESS_TOKEN_FAILURE:
      return {
        ...state,
        github: {
          ...state.github,
          accessToken: {
            loaded: false,
            loading: false,
          },
          user: {
            loaded: false,
            loading: false,
          },
        },
      };
    case CLEAR_GITHUB_ACCESS_TOKEN:
      const { github, ...noGithub } = state;
      return noGithub;
    default:
      return state;
  }
};
