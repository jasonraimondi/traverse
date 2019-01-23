import { assert } from 'chai';

import { ILanguage } from '@/renderer/app/TrendingRepos/components/LanguageList';
import { SetLanguageAction } from '@/renderer/store/Trending/actions/SetLanguageAction';
import { TrendingReducer } from '@/renderer/store/Trending/Reducer';

describe('SetLanguageAction', () => {
  test('SET_LANGUAGE updates options.language', () => {
    const language: ILanguage = { value: 'php', title: 'PHP' };
    const action = SetLanguageAction(language);
    const actualState = TrendingReducer(undefined, action);
    assert.deepStrictEqual(actualState.options.language, language);
  });
});
