import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';

import { RepositoryList } from '@/renderer/elements/RepositoryList';
import { DummyRepositoryEntity } from '@/renderer/model/_tests/Dummy';

describe('<RepositoryList />', () => {
  test('Repository List', () => {
    const list = [
      DummyRepositoryEntity(),
      DummyRepositoryEntity(),
    ];

    const component = mount(
      <RepositoryList
        handleStargazerClick={() => null}
        repositoryList={list}
      />,
    );
    assert.lengthOf(component.find('li.repository-selectedTrend-item'), 2);
  });

  test('Empty Repository List Display', () => {
    const list = [];
    const component = mount(
      <RepositoryList
        handleStargazerClick={() => null}
        repositoryList={list}
        emptyRepositoryList={<p className='empty'>No Repos</p>}
      />,
    );
    assert.strictEqual(component.find('.empty').text(), 'No Repos');
  });
});
