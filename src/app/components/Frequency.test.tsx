import { shallow } from 'enzyme';
import * as React from 'react';

import { Frequency } from './Frequency';

describe('<Frequency />', () => {
  test('displays correct frequency', () => {
    const mockOnClick = jest.fn();
    const component = shallow(<Frequency frequency='weekly' handleSetFrequency={mockOnClick}/>);
    component.find('#select-monthly').simulate('click');
    expect(component.find('#frequency').text()).toEqual('Frequency: monthly');
  });
});
