import { DummyRepositoryEntity } from '@/models/_tests/Dummy';
import { assert } from 'chai';

import {
  FetchTrendingRepositoryListAction, FetchTrendingRepositoryListSuccessAction,
} from '@/infrastructure/redux/Trending/actions/FetchTrendingRepositoryListAction';
import { TrendingReducer } from '@/infrastructure/redux/Trending/Reducer';

describe('TrendingReducer', () => {
  test('FETCH_TRENDING_REPOSITORY_LIST', () => {
    const action = FetchTrendingRepositoryListAction({
      language: {value: 'Assembly', title: 'Assembly'},
      frequency: 'monthly',
    });
    const repositoryStore = TrendingReducer(undefined, action);
    assert.strictEqual(repositoryStore.options.language.value, 'Assembly');
    assert.strictEqual(repositoryStore.options.frequency, 'monthly');
  });

  test('FETCH_TRENDING_REPOSITORY_LIST_SUCCESS', () => {
    const action = FetchTrendingRepositoryListSuccessAction({
      language: {value: 'Assembly', title: 'Assembly'},
      frequency: 'monthly',
      data: [
        DummyRepositoryEntity(),
        DummyRepositoryEntity(),
      ],
    });
    const repositoryStore = TrendingReducer(undefined, action);
    assert.strictEqual(repositoryStore.options.language.value, 'Assembly');
    assert.strictEqual(repositoryStore.options.frequency, 'monthly');
    assert.lengthOf(repositoryStore.list.Assembly.monthly.list, 2);
  });
});
