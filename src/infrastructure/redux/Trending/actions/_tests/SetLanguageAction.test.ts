import { assert } from 'chai';

import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { SetLanguageAction } from '@/infrastructure/redux/Trending/actions/SetLanguageAction';
import { TrendingReducer } from '@/infrastructure/redux/Trending/Reducer';

describe('SetLanguageAction', () => {
  test('SET_LANGUAGE updates options.language', () => {
    const language: ILanguage = { value: 'php', title: 'PHP' };
    const action = SetLanguageAction(language);
    const actualState = TrendingReducer(undefined, action);
    assert.deepStrictEqual(actualState.options.language, language);
  });
});
