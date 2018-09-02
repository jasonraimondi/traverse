import { shallow } from 'enzyme';
import * as React from 'react';

import { App } from './App';

describe('<App />', () => {
  it('renders no name correctly', () => {
    const app = shallow(<App version='1.0'/>);
    expect(app.find('.your-name').text()).toEqual('Your Name: Unknown Name');
  });

  it('renders correct version', () => {
    const app = shallow(<App version='1.1'/>);
    expect(app.find('.version').text()).toEqual('Version: 1.1');
  });

  it('renders the correct name after updating the input value', () => {
    const app = shallow(<App version='1.1'/>);
    app.find('input').simulate('change', { target: { value: 'Jason Raimondi' } });
    expect(app.find('.your-name').text()).toEqual('Your Name: Jason Raimondi');
  });
});
