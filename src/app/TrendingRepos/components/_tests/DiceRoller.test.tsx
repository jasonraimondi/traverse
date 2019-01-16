import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { DiceRoller } from '@/app/TrendingRepos/components/DiceRoller';

describe('<DiceRoller />', () => {
  test('die roller passes click function up', () => {
    let dieWasClicked = false;
    const component = shallow(<DiceRoller onClickRoll={() => dieWasClicked = true} />);
    component.find('#dice-roller').simulate('click');

    assert.isTrue(dieWasClicked);
  });
});
