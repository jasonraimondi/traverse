import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { DieRoller } from '@/app/TrendingRepos/components/DieRoller';

describe('<DieRoller />', () => {
  test('die roller passes click function up', () => {
    let dieWasClicked = false;
    const component = shallow(<DieRoller onClickRoll={() => dieWasClicked = true} />);
    component.find('#dice-roller').simulate('click');

    assert.isTrue(dieWasClicked);
  });
});
