import { assert } from 'chai';

import { ClearCurrentStargazerAction } from '@/infrastructure/redux/Stargazer/actions/ClearCurrentStargazerAction';
import { StargazerReducer } from '@/infrastructure/redux/Stargazer/Reducer';
import { StargazerStore } from '@/infrastructure/redux/Stargazer/Store';

let initialState: StargazerStore;

describe('StargazerReducer', () => {
  beforeEach(() => {
    initialState = {
      userList: {
        loaded: false,
        loading: false,
      },
      repositoryList: {
        loaded: false,
        loading: false,
      },
    };
  });

  test('CLEAR_CURRENT_STARGAZER updates reducer', () => {
    const action = ClearCurrentStargazerAction();
    initialState.currentUserLogin = 'jasonraimondi';
    const state = StargazerReducer(initialState, action);
    assert.isUndefined(state.currentUserLogin);
  });
});
