import { assert } from 'chai';

import { ClearCurrentStargazerAction } from '@/renderer/store/Stargazer/actions/ClearCurrentStargazerAction';
import { STARGAZER_INITIAL_STATE, StargazerReducer } from '@/renderer/store/Stargazer/Reducer';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

let initialState: StargazerStore;

describe('StargazerReducer', () => {
  beforeEach(() => {
    initialState = STARGAZER_INITIAL_STATE;
  });

  test('CLEAR_CURRENT_STARGAZER updates reducer', () => {
    const action = ClearCurrentStargazerAction();
    initialState.currentUserLogin = 'jasonraimondi';
    const state = StargazerReducer(initialState, action);
    assert.isUndefined(state.currentUserLogin);
  });
});
