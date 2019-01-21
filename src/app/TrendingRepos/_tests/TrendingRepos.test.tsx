import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import TrendingRepos from '@/app/TrendingRepos/TrendingRepos';
import {
  FetchTrendingRepositoryListAction,
  FetchTrendingRepositoryListActionFields,
} from 'FetchTrendingRepositoryListAction.ts';
import { SetFrequencyAction } from '@/infrastructure/redux/actions/SetFrequencyAction';
import { SetLanguageAction } from '@/infrastructure/redux/actions/SetLanguageAction';
import { RepositoryEntity } from '@/models/Repository.entity';

const mockStore = configureStore();
const INITIAL_STATE = {
  language: {
    value: 'typescript',
    title: 'TypeScript',
  },
  frequency: 'weekly',
  trendingRepositoryList: {
    abc: new RepositoryEntity('abc'),
  },
};
const store = mockStore(INITIAL_STATE);

describe('<TrendingRepos />', () => {
  let app;

  beforeEach(() => {
    store.clearActions();
    app = mount(<TrendingRepos store={store}/>);
  });

  test('renders viewport content correctly', () => {
    assert.strictEqual(app.find('.name').first().text(), 'Unknown');
    assert.strictEqual(app.find('.language').first().text(), 'Unknown');
  });

  test('selecting frequency runs set action and fetch repository list action', () => {
    store.clearActions();

    app.find('button#select-monthly').simulate('click');

    const frequency = 'monthly';

    assert.deepStrictEqual(store.getActions()[0], SetFrequencyAction(frequency));
    assert.deepStrictEqual(store.getActions()[1], FetchTrendingRepositoryListAction({
      language: INITIAL_STATE.language,
      frequency,
    }));
  });

  test('selecting language runs set action and fetch repository list action', () => {
    store.clearActions();

    app.find('li.language-list-item button').at(2).simulate('click');

    const language = {
      value: 'CSharp',
      title: 'C#',
    };

    assert.deepStrictEqual(store.getActions()[0], SetLanguageAction(language));
    assert.deepStrictEqual(store.getActions()[1], FetchTrendingRepositoryListAction({
      language,
      frequency: INITIAL_STATE.frequency,
    } as FetchTrendingRepositoryListActionFields));
  });
});
