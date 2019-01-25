import { UserEntity } from '@/renderer/model/User.entity';
import { ActionResponse } from '@/renderer/store/Interfaces';
import { SetCurrentStargazerSuccessActionFields } from '@/renderer/store/Stargazer/actions/SetCurrentStargazerAction';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

export function SetCurrentStargazerSuccessReducer(
  state: StargazerStore,
  action: ActionResponse<SetCurrentStargazerSuccessActionFields>,
) {
  Object.freeze(state);
  const {user, repositoryList} = action.payload;
  return {
    ...state,
    currentUserLogin: user.attributes.login,
    repositoryList: {
      ...state.repositoryList,
      loaded: true,
      loading: false,
      list: {
        ...(state.repositoryList.list ? state.repositoryList.list : {}),
        [user.attributes.login]: repositoryList,
      },
    },
  };
}

export function ClearCurrentStargazerReducer(state: StargazerStore, action) {
  const {
    currentUserLogin,
    ...updatedState
  } = state;
  return updatedState;
}

export function AddUserToStargazerListReducer(state: StargazerStore, action) {
  return {
    ...state,
    userList: {
      ...state.userList,
      loading: true,
      loaded: false,
    },
  };
}

export function RemoveUserFromStargazerListReducer(
  state: StargazerStore,
  action: ActionResponse<string>,
) {
  const {list} = state.userList;
  if (list.hasOwnProperty(action.payload)) {
    delete state.userList.list[action.payload];
  }
  return {...state};
}

export function AddUserToStargazerListSuccessReducer(
  state: StargazerStore,
  action: ActionResponse<UserEntity>,
) {
  const user = action.payload;
  return {
    ...state,
    currentUserLogin: user.attributes.login,
    userList: {
      ...state.userList,
      loading: false,
      loaded: true,
      list: {
        ...state.userList.list,
        [user.attributes.login]: user,
      },
    },
  };
}
