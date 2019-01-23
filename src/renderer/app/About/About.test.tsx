import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { About } from '@/renderer/app/About/About';

describe('<About />', () => {

  test('AboutTest', () => {
    const component = shallow(<About/>);
    const copyrightText = component.find('.copyright').text();
    assert.isTrue(copyrightText.includes('2019'));
  });
});
