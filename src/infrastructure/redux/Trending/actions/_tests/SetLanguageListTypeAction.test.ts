import { assert } from 'chai';

import { ListType } from '@/app/TrendingRepos/components/LanguageListPicker';
import { SetLanguageListTypeAction } from '@/infrastructure/redux/Trending/actions/SetLanguageListTypeAction';
import { TrendingReducer } from '@/infrastructure/redux/Trending/Reducer';

describe('SetLanguageListTypeAction', () => {
  test('SET_LANGUAGE_LIST updates options.list', () => {
    const listType: ListType = 'all';
    const action = SetLanguageListTypeAction(listType);
    const actualState = TrendingReducer(undefined, action);
    assert.strictEqual(actualState.options.list, listType);
  });
});
