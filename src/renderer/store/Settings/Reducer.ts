import { CLEAR_GITHUB_ACCESS_TOKEN } from '@/renderer/store/Settings/actions/ClearGithubAccessTokenAction';
import {
  SET_GITHUB_ACCESS_TOKEN, SET_GITHUB_ACCESS_TOKEN_FAILURE,
  SET_GITHUB_ACCESS_TOKEN_SUCCESS,
} from '@/renderer/store/Settings/actions/SetGithubAccessTokenAction';
import {
  SetGithubAccessTokenFailureReducer,
  SetGithubAccessTokenReducer,
  SetGithubAccessTokenSuccessReducer,
} from '@/renderer/store/Settings/Effect';
import { SettingsStore } from '@/renderer/store/Settings/Store';

export const SETTINGS_INITIAL_STATE: SettingsStore = {};

export const SettingsReducer = (state = SETTINGS_INITIAL_STATE, action): SettingsStore => {
  switch (action.type) {
    case SET_GITHUB_ACCESS_TOKEN:
      return SetGithubAccessTokenReducer(state, action);
    case SET_GITHUB_ACCESS_TOKEN_SUCCESS:
      return SetGithubAccessTokenSuccessReducer(state, action);
    case SET_GITHUB_ACCESS_TOKEN_FAILURE:
      return SetGithubAccessTokenFailureReducer(state, action);
    case CLEAR_GITHUB_ACCESS_TOKEN:
      const {github, ...noGithub} = state;
      return noGithub;
    default:
      return state;
  }
};
