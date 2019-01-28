import { ActionResponse } from '@/renderer/store/Interfaces';
import { AddUserToStargazerListSuccessFields } from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

export function AddUserToStargazerListReducer(state: StargazerStore, action) {
  return {
    ...state,
    loading: true,
    loaded: false,
  };
}

export function ClearCurrentStargazerReducer(state: StargazerStore) {
  const {
    currentUserLogin,
    ...storeWithout
  } = state;
  return storeWithout;
}

export function RemoveUserFromStargazerListReducer(
  state: StargazerStore,
  action: ActionResponse<string>,
) {
  const {list} = state;
  if (list.hasOwnProperty(action.payload)) {
    delete state.list[action.payload];
  }
  return {...state};
}

export function AddUserToStargazerListSuccessReducer(
  state: StargazerStore,
  action: ActionResponse<AddUserToStargazerListSuccessFields>,
) {
  const {user, stargazerRepositoryList} = action.payload;
  return {
    ...state,
    currentUserLogin: user.attributes.login,
    loading: false,
    loaded: true,
    list: {
      ...state.list,
      [user.attributes.login]: {
        ...state.list[user.attributes.login],
        user,
        stargazerRepositoryList,
      },
    },
  };
}
