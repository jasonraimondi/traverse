import { shallow } from 'enzyme';
import * as React from 'react';

import { RepositoryList } from './RepositoryList';

describe('<RepositoryList />', () => {
  test('displays list items', () => {
    const list = {
      a: 'List Item',
    };
    const component = shallow(<RepositoryList list={list}/>);
    expect(component.find('#repository-list').text()).toEqual('List Item');
  });
});
