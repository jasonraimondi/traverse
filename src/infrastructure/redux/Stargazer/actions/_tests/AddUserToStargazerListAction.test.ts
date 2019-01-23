import { assert } from 'chai';

import {
  AddUserToStargazerListAction,
} from '@/infrastructure/redux/Stargazer/actions/AddUserToStargazerListAction';
import { StargazerReducer } from '@/infrastructure/redux/Stargazer/Reducer';

describe('StargazerReducer', () => {
  test('ADD_USER_TO_STARGAZER_LIST_SUCCESS updates the stargazer list reducer properly', () => {
    const action = AddUserToStargazerListAction('jasonraimondi');
    const stargazerList = StargazerReducer(undefined, action);
    assert.isTrue(stargazerList.userList.loading);
    assert.isFalse(stargazerList.userList.loaded);
  });

  // test('ADD_USER_TO_STARGAZER_LIST_SUCCESS updates the stargazer list reducer properly', () => {
  //   const data = require('@/infrastructure/rest/_tests/responses/user-detail-success.json');
  //   const list = UserEntity.fromResponse(data);
  //   const action = AddUserToStargazerListSuccessAction(list);
  //
  //   const stargazerList = StargazerReducer(undefined, action);
  //
  //   console.log(stargazerList);
  //
  //   assert.strictEqual(Object.values(stargazerList)[0].id, 5787967);
  //   assert.strictEqual(Object.values(stargazerList)[0].attributes.name, 'Jason Raimondi');
  //   assert.isTrue(true);
  // });
});
