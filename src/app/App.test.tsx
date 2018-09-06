import { mount } from 'enzyme';
import * as React from 'react';
import configureStore from 'redux-mock-store'; // Smart components
import {
  FetchRepositoryListAction,
  FetchRepositoryListActionFields,
} from '../infrastructure/redux/actions/FetchRepositoryList.action';
import { SetFrequencyAction } from '../infrastructure/redux/actions/SetFrequency.action';

import { SetLanguageAction } from '../infrastructure/redux/actions/SetLanguage.action';
import { RepositoryEntity } from '../models/Repository.entity';
import App from './App';

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

  it('renders viewport content correctly', () => {
    const app = mount(<App store={store}/>);
    expect(app.find('#app-content').text()).toBe('No Name');
  });

  it('selecting frequency runs set action and fetch repository list action', () => {
    const app = mount(<App store={store}/>);
    store.clearActions();

    app.find('#select-monthly').simulate('click');

    const frequency = 'monthly';

    expect(store.getActions()[0]).toEqual(SetFrequencyAction(frequency));
    expect(store.getActions()[1]).toEqual(FetchRepositoryListAction({
      language: INITIAL_STATE.language,
      frequency,
    }));
  });

  it('selecting language runs set action and fetch repository list action', () => {
    const app = mount(<App store={store}/>);
    store.clearActions();

    app.find('.language-list-item a').at(2).simulate('click');

    const language = 'ActionScript';

    expect(store.getActions()[0]).toEqual(SetLanguageAction(language));
    expect(store.getActions()[1]).toEqual(FetchRepositoryListAction({
      language,
      frequency: INITIAL_STATE.frequency,
    } as FetchRepositoryListActionFields));
  });
});
