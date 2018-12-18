import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';

import { RepositoryList } from '@/app/components/RepositoryList';
import { RepositoryEntity } from '@/models/Repository.entity';

describe('<RepositoryList />', () => {
  test('displays list items', () => {
    const list = { abc: new RepositoryEntity('abc'), def: new RepositoryEntity('def') };
    const component = mount(<RepositoryList repositoryList={list}/>);

    assert.lengthOf(component.find('.repository-list-item'), 2);
  });
});
