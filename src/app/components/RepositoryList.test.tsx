import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { RepositoryEntity } from '../../models/Repository.entity';

import { RepositoryList } from './RepositoryList';

describe('<RepositoryList />', () => {
  test('displays list items', () => {
    const list = { abc: new RepositoryEntity('abc'), def: new RepositoryEntity('def') };
    const component = mount(<RepositoryList repositoryList={list}/>);

    assert.lengthOf(component.find('.repository-list-item'), 2);
  });
});
