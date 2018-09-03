import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'; // Smart components

import * as React from 'react';

import App from './App';

const mockStore = configureStore();
const INITIAL_STATE = {
  frequency: 'All',
};
const store = mockStore(INITIAL_STATE);

describe('<App />', () => {
  it('renders viewport content correctly', () => {
    const wrapper = shallow(<App store={store}/>);
    const component = wrapper.dive();
    expect(component.find('#app-viewport').text()).toEqual('Repository List');
  });
});
