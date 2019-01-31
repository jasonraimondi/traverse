import { DummyUserEntity } from '@/renderer/infrastructure/model/_tests/Dummy';
import { assert } from 'chai';

import {
  RemoveUserFromStargazerListAction,
} from '@/renderer/store/Stargazer/actions/RemoveUserFromStargazerListAction';
import { STARGAZER_INITIAL_STATE, StargazerReducer } from '@/renderer/store/Stargazer/Reducer';

describe('RemoveUserFromStargazerList', () => {
  test('REMOVE_USER_FROM_STARGAZER_LIST updates the stargazer stargazerRepositoryList reducer properly', () => {
    const action = RemoveUserFromStargazerListAction('jasonraimondi');
    const initialState = STARGAZER_INITIAL_STATE;
    initialState.repositoryList = {
      jasonraimondi: {
        lastUpdated: 1548822712 * 1000,
        data: {
          user: DummyUserEntity(),
          stargazerRepositoryList: [],
        },
      },
    };
    const stargazerList = StargazerReducer(initialState, action);

    assert.deepStrictEqual(stargazerList, STARGAZER_INITIAL_STATE);
  });
});
