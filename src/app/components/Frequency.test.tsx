import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { Frequency } from './Frequency';

describe('<Frequency />', () => {
  test('displays correct frequency', () => {
    const mockOnClick = jest.fn();
    const component = shallow(<Frequency frequency='weekly' handleSetFrequency={mockOnClick}/>);

    component.find('#select-monthly').simulate('click');

    assert.lengthOf(component.find('#frequency-list').children(), 4);
    assert.equal(component.find('#frequency-list').children().get(0).key, 'daily');
    assert.equal(component.find('#frequency-list').children().get(1).key, 'weekly');
  });
});
