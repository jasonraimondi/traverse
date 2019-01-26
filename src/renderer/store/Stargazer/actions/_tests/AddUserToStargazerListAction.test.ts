import { AddUserToStargazerListAction } from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';
import { StargazerReducer } from '@/renderer/store/Stargazer/Reducer';
import { assert } from 'chai';

describe('StargazerReducer', () => {
  test('ADD_USER_TO_STARGAZER_LIST_SUCCESS updates the stargazer repositoryList reducer properly', () => {
    const action = AddUserToStargazerListAction('jasonraimondi');
    const stargazerList = StargazerReducer(undefined, action);
    assert.isTrue(stargazerList.loading);
    assert.isFalse(stargazerList.loaded);
  });

  // test('ADD_USER_TO_STARGAZER_LIST_SUCCESS updates the stargazer repositoryList reducer properly', () => {
  //   const data = require('@/renderer/infrastructure/rest/_tests/responses/user-detail-success.json');
  //   const repositoryList = UserEntity.fromResponse(data);
  //   const action = AddUserToStargazerListSuccessAction(repositoryList);
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
