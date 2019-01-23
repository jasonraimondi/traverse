import { assert } from 'chai';

import { DummyRepositoryEntity } from '@/renderer/model/_tests/Dummy';
import {
  FetchTrendingRepositoryListAction,
  FetchTrendingRepositoryListSuccessAction,
} from '@/renderer/store/Trending/actions/FetchTrendingRepositoryListAction';
import { TrendingReducer } from '@/renderer/store/Trending/Reducer';

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
