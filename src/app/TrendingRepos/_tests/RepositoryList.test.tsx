import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';

import { RepositoryList } from '@/app/TrendingRepos/components/RepositoryList';
import { RepositoryEntity } from '@/models/Repository.entity';

describe('<RepositoryList />', () => {
  test('displays list items', () => {
    const list = { abc: new RepositoryEntity('abc'), def: new RepositoryEntity('def') };
    const language = { value: 'typescript', title: 'TypeScript'};
    const component = mount(<RepositoryList frequency='weekly' language={language} repositoryList={list}/>);
    assert.lengthOf(component.find('li.repository-list-item'), 2);
  });
});
