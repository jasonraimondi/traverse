import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';

import { TitleBar } from '@/app/components/TitleBar';

describe('<TitleBar />', () => {
  test('displays list items', () => {
    const component = mount(<TitleBar frequency={'weekly'} language={''}/>);

    assert.strictEqual(component.find('.selected-frequency').text(), 'Weekly');
    assert.strictEqual(component.find('.selected-language').text(), 'All Languages');
  });
});
