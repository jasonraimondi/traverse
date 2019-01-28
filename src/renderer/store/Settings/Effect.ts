import { ActionResponse } from '@/renderer/store/Interfaces';
import { SetGithubAccessTokenSuccessFields } from '@/renderer/store/Settings/actions/SetGithubAccessTokenAction';
import { SettingsStore } from '@/renderer/store/Settings/Store';

export function SetGithubAccessTokenSuccessReducer(
  state: SettingsStore,
  action: ActionResponse<SetGithubAccessTokenSuccessFields>,
) {
  return {
    ...state,
    github: {
      ...state.github,
      accessToken: action.payload.token,
      user: {
        loaded: true,
        loading: false,
        user: action.payload.user,
        login: action.payload.user.attributes.login,
      },
    },
  };
}

export function SetGithubAccessTokenFailureReducer(state, action) {
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
}

export function SetGithubAccessTokenReducer(state, action) {
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
}
