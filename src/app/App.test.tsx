import { shallow } from 'enzyme';

import * as React from 'react';

import { App } from './App';
import Frequency from './Frequency';

describe('<App />', () => {
  it('renders viewport content correctly', () => {
    const app = shallow(<App />);
    expect(app.find('#app-viewport').text()).toEqual('Repository List');
  });

  it('renders bottombar content correctly', () => {
    const app = shallow(<App />);
    expect(app.find('#app-bottombar').contains(<Frequency/>)).toBeTruthy();
  });
});
