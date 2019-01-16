import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { RepositoryDetail } from '@/app/elements/RepositoryDetail';
import { RepositoryEntity } from '@/models/Repository.entity';

describe('<Repository />', () => {
  test('displays list items', () => {
    const repository = new RepositoryEntity('def');
    const component = shallow(
      <RepositoryDetail repository={repository}
                        handleStargazerClick={() => null}
    />);
    assert.isEmpty(component.find('.description'));
  });
});
