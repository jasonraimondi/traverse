import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { Frequency } from '@/app/components/Frequency';

describe('<Frequency />', () => {
  test('displays correct frequency', () => {
    const mockOnClick = jest.fn();
    const component = shallow(<Frequency frequency='weekly' handleSetFrequency={mockOnClick}/>);

    component.find('#select-monthly').simulate('click');

    assert.lengthOf(component.find('#frequency-list').children(), 4);
    assert.strictEqual(component.find('#frequency-list').children().get(0).key, 'daily');
    assert.strictEqual(component.find('#frequency-list').children().get(1).key, 'weekly');
  });
});
