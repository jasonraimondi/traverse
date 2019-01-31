import { assert } from 'chai';

import { FrequencyType } from '@/renderer/infrastructure/model/Frequency.type';
import { SetFrequencyAction } from '@/renderer/store/Trending/actions/SetFrequencyAction';
import { TrendingReducer } from '@/renderer/store/Trending/Reducer';

describe('SetFrequencyAction', () => {
  test('SET_FREQUENCY updates options.frequency', () => {
    const frequency: FrequencyType = 'monthly';
    const action = SetFrequencyAction('monthly');
    const actualState = TrendingReducer(undefined, action);

    assert.strictEqual(actualState.options.frequency, frequency);
  });
});
