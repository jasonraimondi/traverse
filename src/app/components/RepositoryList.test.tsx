import { shallow } from 'enzyme';
import * as React from 'react';
import { RepositoryEntity } from '../../models/Repository.entity';

import { RepositoryList } from './RepositoryList';

describe('<RepositoryList />', () => {
  test('displays list items', () => {
    const list = { abc: new RepositoryEntity('abc') };
    const component = shallow(<RepositoryList list={list}/>);
    expect(component.find('#repository-list').text()).toEqual('No Name');
  });
});
