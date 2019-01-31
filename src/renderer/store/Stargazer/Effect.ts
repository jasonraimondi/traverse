import { UserEntity } from '@/renderer/model/User.entity';
import { ActionResponse } from '@/renderer/store/Interfaces';
import { SetGithubAccessTokenSuccessFields } from '@/renderer/store/Settings/actions/SetGithubAccessTokenAction';
import {
  FetchUserStarredRepositoryListSuccessFields,
} from '@/renderer/store/Stargazer/actions/FetchUserStarredRepositoryListAction';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

export function AddUserToStargazerListReducer(state: StargazerStore, action) {
  return {
    ...state,
    loading: true,
    loaded: false,
  };
}

export function RemoveUserFromStargazerListReducer(
  state: StargazerStore,
  action: ActionResponse<string>,
): StargazerStore {
  const foo = { ...state };
  if (foo.stargazerList.hasOwnProperty(action.payload)) {
    delete foo.stargazerList[action.payload];
  }
  return foo;
}

export function AddUserToStargazerListSuccessReducer(
  state: StargazerStore,
  action: ActionResponse<UserEntity>,
): StargazerStore {
  return {
    ...state,
    stargazerList: {
      ...state.stargazerList,
      [action.payload.attributes.login]: {
        lastUpdated: Date.now(),
        data: action.payload,
      },
    },
    loading: false,
    loaded: true,
  };
}

export function FetchUserStarredRepositoryListSuccessReducer(
  state: StargazerStore,
  action: ActionResponse<FetchUserStarredRepositoryListSuccessFields>,
): StargazerStore {
  const {user, stargazerRepositoryList} = action.payload;
  const login = user.attributes.login;
  return {
    ...state,
    loading: false,
    loaded: true,
    repositoryList: {
      ...state.repositoryList,
      [login]: {
        lastUpdated: Date.now(),
        data: {
          user,
          stargazerRepositoryList,
        },
      },
    },
  };
}

export function SetAuthUserStargazerSuccessReducer(
  state: StargazerStore,
  action: ActionResponse<SetGithubAccessTokenSuccessFields>,
): StargazerStore {
  Object.freeze(state);
  const { user } = action.payload;
  return {
    ...state,
    stargazerList: {
      [user.attributes.login]: {
        lastUpdated: Date.now(),
        data: user,
      },
      ...state.stargazerList,
    },
  };
}
