import { assert } from 'chai';

import {
  RemoveUserFromStargazerListAction,
} from '@/infrastructure/redux/Stargazer/actions/RemoveUserFromStargazerListAction';
import { STARGAZER_INITIAL_STATE, StargazerReducer } from '@/infrastructure/redux/Stargazer/Reducer';
import { UserEntity } from '@/models/User.entity';

describe('RemoveUserFromStargazerList', () => {
  test('REMOVE_USER_FROM_STARGAZER_LIST updates the stargazer list reducer properly', () => {
    const action = RemoveUserFromStargazerListAction('jasonraimondi');
    const initialState = STARGAZER_INITIAL_STATE;
    initialState.userList.list = {
      jasonraimondi: [
        new UserEntity(1),
      ],
    };
    const stargazerList = StargazerReducer(initialState, action);

    assert.deepStrictEqual(stargazerList, STARGAZER_INITIAL_STATE);
  });
});
