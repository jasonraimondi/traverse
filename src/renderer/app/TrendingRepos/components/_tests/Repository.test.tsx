import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { RepositoryDetail } from '@/renderer/elements/RepositoryDetail';
import { DummyRepositoryEntity } from '@/renderer/model/_tests/Dummy';

describe('<Repository />', () => {
  test('displays list items', () => {
    const repository = DummyRepositoryEntity();
    const component = shallow(
      <RepositoryDetail repository={repository}
                        handleStargazerClick={() => null}
    />);
    assert.isEmpty(component.find('.description'));
  });
});
