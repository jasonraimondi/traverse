import { ClearCurrentStargazerAction } from '@/infrastructure/redux/actions/ClearCurrentStargazerAction';
import { assert } from 'chai';

import { SetCurrentStargazerAction } from '@/infrastructure/redux/actions/SetCurrentStargazerAction';
import { currentStargazerReducer } from '@/infrastructure/redux/reducers/CurrentStargazer.reducer';

describe('RepositoryList Reducer', () => {
  test('INITIAL_STATE for repository list is blank', () => {
    const action = { type: undefined };
    const initialState = null;
    assert.deepStrictEqual(currentStargazerReducer(undefined, action), initialState);
  });

  test('SET_CURRENT_STARGAZER sets the current stargazer reducer properly', () => {
    const username = 'jasonraimondi';
    const action = SetCurrentStargazerAction(username);

    const currentStargazer = currentStargazerReducer(undefined, action);

    assert.strictEqual(currentStargazer, null);
  });

  test('CLEAR_CURRENT_STARGAZER sets the current stargazer reducer properly', () => {
    const action = ClearCurrentStargazerAction();

    const state = currentStargazerReducer(undefined, action);

    assert.isNull(state);
  });
});
