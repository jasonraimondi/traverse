import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import TrendingRepos from '@/renderer/app/TrendingRepos/TrendingRepos';
import { DummyRepositoryEntity } from '@/renderer/infrastructure/model/_tests/Dummy';
import {
  FetchTrendingRepositoryListAction,
  FetchTrendingRepositoryListActionFields,
} from '@/renderer/store/Trending/actions/FetchTrendingRepositoryListAction';
import { SetFrequencyAction } from '@/renderer/store/Trending/actions/SetFrequencyAction';
import { SetLanguageAction } from '@/renderer/store/Trending/actions/SetLanguageAction';
import { TRENDING_INITIAL_STATE } from '@/renderer/store/Trending/Reducer';

const mockStore = configureStore();

const initialState = {
  trending: {
    ...TRENDING_INITIAL_STATE,
    list: {
      typescript: {
        weekly: {
          lastUpdated: Date.now(),
          list: [
            DummyRepositoryEntity(),
            DummyRepositoryEntity(),
          ],
        },
      },
    },
  },
};

const store = mockStore(initialState);

describe('<TrendingRepos />', () => {
  let app;

  beforeEach(() => {
    store.clearActions();
    app = mount(<TrendingRepos store={store}/>);
  });

  test('renders viewport content correctly', () => {
    assert.strictEqual(app.find('.name').first().text(), 'Unknown');
    assert.strictEqual(app.find('.language').first().text(), 'TypeScript');
  });

  test('selecting frequency runs set action and fetch repository selectedTrend action', () => {
    store.clearActions();
    app.find('button#select-monthly').simulate('click');
    const frequency = 'monthly';
    assert.deepStrictEqual(store.getActions()[0], SetFrequencyAction(frequency));
    assert.deepStrictEqual(store.getActions()[1], FetchTrendingRepositoryListAction({
      language: initialState.trending.options.language,
      frequency,
    }));
  });

  test('selecting language runs set action and fetch repository selectedTrend action', () => {
    store.clearActions();

    app.find('li.language-selectedTrend-item button').at(2).simulate('click');

    const language = {
      value: 'CSharp',
      title: 'C#',
    };

    assert.deepStrictEqual(store.getActions()[0], SetLanguageAction(language));
    assert.deepStrictEqual(store.getActions()[1], FetchTrendingRepositoryListAction({
      language,
      frequency: initialState.trending.options.frequency,
    } as FetchTrendingRepositoryListActionFields));
  });
});
