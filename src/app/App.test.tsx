import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import configureStore from 'redux-mock-store';

import App from '@/app/App';
import {
  FetchRepositoryListAction,
  FetchRepositoryListActionFields,
} from '@/infrastructure/redux/actions/FetchRepositoryList.action';
import { SetFrequencyAction } from '@/infrastructure/redux/actions/SetFrequency.action';
import { SetLanguageAction } from '@/infrastructure/redux/actions/SetLanguage.action';
import { RepositoryEntity } from '@/models/Repository.entity';

const mockStore = configureStore();
const INITIAL_STATE = {
  language: 'typescript',
  frequency: 'weekly',
  repositoryList: {
    abc: new RepositoryEntity('abc'),
  },
};
const store = mockStore(INITIAL_STATE);

describe('<App />', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('renders viewport content correctly', () => {
    const app = mount(<App store={store}/>);
    assert.strictEqual(app.find('.name').first().text(), 'Unknown');
    assert.strictEqual(app.find('.language').first().text(), 'Unknown');
  });

  test('selecting frequency runs set action and fetch repository list action', () => {
    const app = mount(<App store={store}/>);
    store.clearActions();

    app.find('#select-monthly').simulate('click');

    const frequency = 'monthly';

    assert.deepStrictEqual(store.getActions()[0], SetFrequencyAction(frequency));
    assert.deepStrictEqual(store.getActions()[1], FetchRepositoryListAction({
      language: INITIAL_STATE.language,
      frequency,
    }));
  });

  test('selecting language runs set action and fetch repository list action', () => {
    const app = mount(<App store={store}/>);
    store.clearActions();

    app.find('.language-list-item a').at(2).simulate('click');

    const language = 'CSharp';

    assert.deepStrictEqual(store.getActions()[0], SetLanguageAction(language));
    assert.deepStrictEqual(store.getActions()[1], FetchRepositoryListAction({
      language,
      frequency: INITIAL_STATE.frequency,
    } as FetchRepositoryListActionFields));
  });
});
