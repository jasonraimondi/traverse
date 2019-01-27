import { ActionResponse } from '@/renderer/store/Interfaces';
import { CLEAR_GITHUB_ACCESS_TOKEN } from '@/renderer/store/Settings/actions/ClearGithubAccessTokenAction';
import {
  SET_GITHUB_ACCESS_TOKEN, SET_GITHUB_ACCESS_TOKEN_FAILURE,
  SET_GITHUB_ACCESS_TOKEN_SUCCESS, SetGithubAccessTokenSuccessFields,
} from '@/renderer/store/Settings/actions/SetGithubAccessTokenAction';
import { SettingsStore } from '@/renderer/store/Settings/Store';

export const SETTINGS_INITIAL_STATE: SettingsStore = {};

function SetGithubAccessTokenSuccessEffect(
  state: SettingsStore,
  action: ActionResponse<SetGithubAccessTokenSuccessFields>,
) {
  return {
    ...state,
    github: {
      ...state.github,
      accessToken: action.payload.token,
      login: action.payload.user.attributes.login,
      user: {
        loaded: true,
        loading: false,
        user: action.payload.user,
      },
    },
  };
}

export const SettingsReducer = (state = SETTINGS_INITIAL_STATE, action): SettingsStore => {
  switch (action.type) {
    case SET_GITHUB_ACCESS_TOKEN:
      return {
        ...state,
        github: {
          ...state.github,
          user: {
            loaded: false,
            loading: true,
          },
        },
      };
    case SET_GITHUB_ACCESS_TOKEN_SUCCESS:
      return SetGithubAccessTokenSuccessEffect(state, action);
    case SET_GITHUB_ACCESS_TOKEN_FAILURE:
      return {
        ...state,
        github: {
          ...state.github,
          user: {
            loaded: false,
            loading: false,
          },
        },
      };
    case CLEAR_GITHUB_ACCESS_TOKEN:
      const {github, ...noGithub} = state;
      return noGithub;
    default:
      return state;
  }
};
