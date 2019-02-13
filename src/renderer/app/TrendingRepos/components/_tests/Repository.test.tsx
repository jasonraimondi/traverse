import { assert } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { RepositoryDetail } from '@/renderer/app/TrendingRepos/components/RepositoryDetail';
import { DummyRepositoryEntity } from '@/renderer/infrastructure/model/_tests/Dummy';

describe('<Repository />', () => {
  test('displays selectedTrend items', () => {
    const repository = DummyRepositoryEntity();
    const component = shallow(
      <RepositoryDetail repository={repository}
                        disableStarRepository={true}
                        handleStarRepository={() => null}
                        handleStargazerClick={() => null}
      />);
    assert.isEmpty(component.find('.description'));
  });
});
