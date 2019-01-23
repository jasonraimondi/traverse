import { assert } from 'chai';

import { SetFrequencyAction } from '@/infrastructure/redux/Trending/actions/SetFrequencyAction';
import { TrendingReducer } from '@/infrastructure/redux/Trending/Reducer';
import { FrequencyType } from '@/models/Frequency.type';

describe('SetFrequencyAction', () => {
  test('SET_FREQUENCY updates options.frequency', () => {
    const frequency: FrequencyType = 'monthly';
    const action = SetFrequencyAction('monthly');
    const actualState = TrendingReducer(undefined, action);

    assert.strictEqual(actualState.options.frequency, frequency);
  });
});
