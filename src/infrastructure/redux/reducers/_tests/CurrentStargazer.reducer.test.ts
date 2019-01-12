import { assert } from 'chai';

import { SetCurrentStargazerAction } from '@/infrastructure/redux/actions/SetCurrentStargazerAction';
import { currentStargazerReducer } from '@/infrastructure/redux/reducers/CurrentStargazer.reducer';
import { UserEntity } from '@/models/User.entity';

describe('RepositoryList Reducer', () => {
  test('INITIAL_STATE for repository list is blank', () => {
    const action = { type: undefined };
    const initialState = null;
    assert.deepStrictEqual(currentStargazerReducer(undefined, action), initialState);
  });

  test('SET_CURRENT_STARGAZER sets the current stargazer reducer properly', () => {
    const data = require('@/infrastructure/rest/_tests/responses/user-detail-success.json');
    const list = UserEntity.fromResponse(data);
    const action = SetCurrentStargazerAction(list);

    const currentStargazer = currentStargazerReducer(undefined, action);

    assert.strictEqual(currentStargazer.id, 5787967);
    assert.strictEqual(currentStargazer.attributes.name, 'Jason Raimondi');
  });
});
