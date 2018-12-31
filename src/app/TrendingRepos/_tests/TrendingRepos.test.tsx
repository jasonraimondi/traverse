import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

import TrendingRepos from '@/app/TrendingRepos/TrendingRepos';
import {
  FetchRepositoryListAction,
  FetchRepositoryListActionFields,
} from '@/infrastructure/redux/actions/FetchRepositoryList.action';
import { SetFrequencyAction } from '@/infrastructure/redux/actions/SetFrequency.action';
import { SetLanguageAction } from '@/infrastructure/redux/actions/SetLanguage.action';
import { RepositoryEntity } from '@/models/Repository.entity';

const mockStore = configureStore();
const INITIAL_STATE = {
  language: {
    value: 'typescript',
    title: 'TypeScript',
  },
  frequency: 'weekly',
  repositoryList: {
    abc: new RepositoryEntity('abc'),
  },
};
const store = mockStore(INITIAL_STATE);

describe('<TrendingRepos />', () => {
  let app;

  beforeEach(() => {
    store.clearActions();
    app = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <TrendingRepos store={store}/>
      </MemoryRouter>,
    );
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
    assert.deepStrictEqual(store.getActions()[1], FetchRepositoryListAction({
      language: INITIAL_STATE.language,
      frequency,
    }));
  });

  test('selecting language runs set action and fetch repository list action', () => {
    store.clearActions();

    app.find('li.language-list-item button').at(2).simulate('click');

    const language = {
      value: 'ActionScript',
      title: 'ActionScript',
    };

    assert.deepStrictEqual(store.getActions()[0], SetLanguageAction(language));
    assert.deepStrictEqual(store.getActions()[1], FetchRepositoryListAction({
      language,
      frequency: INITIAL_STATE.frequency,
    } as FetchRepositoryListActionFields));
  });
});
