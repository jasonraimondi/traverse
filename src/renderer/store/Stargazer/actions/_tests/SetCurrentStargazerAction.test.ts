import { assert } from 'chai';

import { DummyRepositoryEntity, DummyUserEntity } from '@/renderer/model/_tests/Dummy';
import { SetCurrentStargazerSuccessAction } from '@/renderer/store/Stargazer/actions/SetCurrentStargazerAction';
import { StargazerReducer } from '@/renderer/store/Stargazer/Reducer';

describe('StargazerReducer', () => {
  test('SET_CURRENT_STARGAZER updates reducer', () => {
    const user = DummyUserEntity(1);
    const action = SetCurrentStargazerSuccessAction({
      repositoryList: [
        DummyRepositoryEntity(1),
        DummyRepositoryEntity(2),
        DummyRepositoryEntity(3),
      ],
      user,
    });
    const actual = StargazerReducer(undefined, action);
    assert.strictEqual(actual.currentUserLogin, user.attributes.login);
    assert.lengthOf(Object.values(actual.repositoryList.list[user.attributes.login]), 3);
  });
});
