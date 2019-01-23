import { assert } from 'chai';

import { ListType } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { SetLanguageListTypeAction } from '@/renderer/store/Trending/actions/SetLanguageListTypeAction';
import { TrendingReducer } from '@/renderer/store/Trending/Reducer';

describe('SetLanguageListTypeAction', () => {
  test('SET_LANGUAGE_LIST updates options.list', () => {
    const listType: ListType = 'all';
    const action = SetLanguageListTypeAction(listType);
    const actualState = TrendingReducer(undefined, action);
    assert.strictEqual(actualState.options.list, listType);
  });
});
