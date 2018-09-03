import { shallow } from 'enzyme';
import * as React from 'react';

import { Frequency } from './Frequency';

describe('<Frequency />', () => {
  test('displays correct selected', () => {
    const component = shallow(<Frequency selected='All'/>);
    expect(component.find('#selected').text()).toEqual('Frequency: All');
  });
});
