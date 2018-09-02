import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'; // Smart components

import * as React from 'react';

import Frequency from './Frequency';

const mockStore = configureStore();
const INITIAL_STATE = {
  frequency: 'All',
};
const store = mockStore(INITIAL_STATE);

describe('<Frequency />', () => {
  test('displays correct frequency', () => {
    const wrapper = shallow(<Frequency store={store}/>);
    const component = wrapper.dive();
    expect(component.find('#frequency').text()).toEqual('Frequency: All');
  });
});
