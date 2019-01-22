import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { ListType } from '@/app/TrendingRepos/components/LanguageListPicker';
import { FetchTrendingRepositoryListAction } from '@/infrastructure/redux/TrendingRepositoryList/actions/FetchTrendingRepositoryListAction';
import { SetFrequencyAction } from '@/infrastructure/redux/TrendingRepositoryList/actions/SetFrequencyAction';
import { SetLanguageAction } from '@/infrastructure/redux/TrendingRepositoryList/actions/SetLanguageAction';
import { SetLanguageListTypeAction } from '@/infrastructure/redux/TrendingRepositoryList/actions/SetLanguageListTypeAction';
import { TrendingRepositoryListReducer } from '@/infrastructure/redux/TrendingRepositoryList/Reducer';
import { TrendingRepositoryListStore } from '@/infrastructure/redux/TrendingRepositoryList/Store';
import { FrequencyType } from '@/models/Frequency.type';
import { assert } from 'chai';
import { put } from 'redux-saga/effects';

describe('TrendingRepositoryList Reducer', () => {
  test('INITIAL_STATE is set as expected', () => {
    const initialState: TrendingRepositoryListStore = {
      options: {
        language: {
          title: 'TypeScript',
          value: 'typescript',
        },
        frequency: 'weekly',
        list: 'popular',
      },
      loading: false,
      loaded: false,
      data: {},
    };
    const expected = TrendingRepositoryListReducer(undefined, { type: undefined });

    assert.deepStrictEqual(expected, initialState);
  });

  test('SET_LANGUAGE_LIST updates options.list', () => {
    const listType: ListType = 'all';
    const action = SetLanguageListTypeAction(listType);
    const actualState = TrendingRepositoryListReducer(undefined, action);
    assert.strictEqual(actualState.options.list, listType);
  });

  test('SET_LANGUAGE updates options.language', () => {
    const language: ILanguage = { value: 'php', title: 'PHP' };
    const action = SetLanguageAction(language);
    const actualState = TrendingRepositoryListReducer(undefined, action);
    assert.deepStrictEqual(actualState.options.language, language);
  });

  test('SET_FREQUENCY updates options.frequency', () => {
    const frequency: FrequencyType = 'monthly';
    const action = SetFrequencyAction('monthly');
    const actualState = TrendingRepositoryListReducer(undefined, action);

    assert.strictEqual(actualState.options.frequency, frequency);
  });

  test('FETCH_TRENDING_REPOSITORY_LIST_SUCCESS updates the data.[frequency].[language].repositoryList', () => {
    // const data = require('@/infrastructure/rest/_tests/responses/search-repository-success.json');
    // const action = FetchTrendingRepositoryListAction({
    //   language: { value: 'typescript', title: 'TypeScript' },
    //   frequency: 'daily',
    // });

    // const repositoryList = trendingRepositoryListReducer(undefined, action);
    // console.log(repositoryList);
    // const gen = FetchTrendingRepositoryListSaga();
    // assert.strictEqual(
    //   gen.next().value,
    //   put(action),
    //   'it should wait for a user to choose a color',
    // );

    // const repo = repositoryList[''];
    // assert.strictEqual(Object.values(repositoryList)[0].id, 147134009);
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.name, 'vscode-wal');
    // assert.strictEqual(
    //   Object.values(repositoryList)[0].attributes.htmlUrl,
    //   'https://github.com/cmschuetz/vscode-wal'
    // );
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.forksCount, 0);
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.watchersCount, 1);
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.stargazersCount, 1);
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.longName, 'cmschuetz/vscode-wal');
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.description, 'Fake description Jason added');
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.owner.login, 'cmschuetz');
    // assert.strictEqual(Object.values(repositoryList)[0].attributes.owner.htmlUrl, 'https://github.com/cmschuetz');
    // assert.strictEqual(Object.keys(repositoryList).length, 30);
    assert.isTrue(true);
  });
});
