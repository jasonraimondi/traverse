import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { Repository } from '@/app/components/Repository';
import { RepositoryEntity } from '@/models/Repository.entity';

describe('<Repository />', () => {
  test('displays list items', () => {
    const repository = new RepositoryEntity('def');
    const component = shallow(<Repository repository={repository}/>);
    assert.isEmpty(component.find('.description'));
  });
});
