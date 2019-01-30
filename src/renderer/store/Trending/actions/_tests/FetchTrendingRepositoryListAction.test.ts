import { assert } from 'chai';

import { DummyRepositoryEntity } from '@/renderer/model/_tests/Dummy';
import {
  FetchTrendingRepositoryListAction,
  FetchTrendingRepositoryListSuccessAction,
} from '@/renderer/store/Trending/actions/FetchTrendingRepositoryListAction';
import { TRENDING_INITIAL_STATE, TrendingReducer } from '@/renderer/store/Trending/Reducer';

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
    const initialState = TRENDING_INITIAL_STATE;
    initialState.options = {
      ...initialState.options,
      language: {value: 'Assembly', title: 'Assembly'},
      frequency: 'monthly',
    };
    const action = FetchTrendingRepositoryListSuccessAction({
      ...initialState.options,
      data: [
        DummyRepositoryEntity(),
        DummyRepositoryEntity(),
      ],
    });
    const repositoryStore = TrendingReducer(undefined, action);
    assert.strictEqual(repositoryStore.options.language.value, 'Assembly');
    assert.strictEqual(repositoryStore.options.frequency, 'monthly');
    assert.lengthOf(repositoryStore.repositoryList.Assembly.monthly.data, 2);
  });
});
