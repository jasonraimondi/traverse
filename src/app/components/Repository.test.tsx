import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { RepositoryEntity } from '../../models/Repository.entity';
import { Repository } from './Repository';

describe('<Repository />', () => {
  test('displays list items', () => {
    const repository = new RepositoryEntity('def');
    const component = shallow(<Repository repository={repository}/>);
    assert.isNull(component.find('.description'));
  });
});
