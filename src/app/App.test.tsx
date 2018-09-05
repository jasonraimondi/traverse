import { mount } from 'enzyme';
import * as React from 'react';
import configureStore from 'redux-mock-store'; // Smart components

import {
  FetchRepositoryListAction,
  FetchRepositoryListActionFields,
} from '../infrastructure/redux/actions/FetchRepositoryList.action';
import { SetFrequencyAction } from '../infrastructure/redux/actions/SetFrequency.action';
import { RepositoryEntity } from '../models/Repository.entity';

import App from './App';

const mockStore = configureStore();
const INITIAL_STATE = {
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
    expect(app.find('#app-viewport').text()).toBe('No Name');
  });

  it('selecting frequency runs set frequency action and fetch repository list', () => {
    const app = mount(<App store={store}/>);
    store.clearActions();

    app.find('#select-monthly').simulate('click');

    const language = 'typescript';
    const frequency = 'monthly';
    const fields = {
      language,
      frequency,
    } as FetchRepositoryListActionFields;

    expect(store.getActions()).toEqual([SetFrequencyAction(frequency), FetchRepositoryListAction(fields)]);
  });
});
