import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';

import { RepositoryList } from '@/app/elements/RepositoryList';
import { DummyRepositoryEntity } from '@/models/_tests/Dummy';

describe('<RepositoryList />', () => {
  test('displays list items', () => {
    const list = [
      DummyRepositoryEntity(),
      DummyRepositoryEntity(),
    ];

    const component = mount(
      <RepositoryList
        handleStargazerClick={() => null}
        repositoryList={list}
        emptyRepositoryList={'empty'}
      />,
    );
    assert.lengthOf(component.find('li.repository-list-item'), 2);
  });
});
