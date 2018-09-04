import {
  FetchRepositoryListSuccessAction,
} from '../actions/FetchRepositoryList.action';
import { repositoryListReducer } from './RepositoryList.reducer';

describe('RepositoryList Reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = { type: undefined };
      const initialState = {};
      expect(repositoryListReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('FETCH_REPOSITORY_LIST_SUCCESS', () => {
    test('github response is parsed and put into an object with key: id, value: repository entity', () => {
      const data = require('../../../../test/responses/fake-fetch-repository-list-success.json');

      const action = FetchRepositoryListSuccessAction(data);

      const repositoryList = repositoryListReducer(undefined, action);
      expect(Object.values(repositoryList)[0].id).toEqual(147134009);
      expect(Object.values(repositoryList)[0].attributes.name).toEqual('vscode-wal');
      expect(Object.values(repositoryList)[0].attributes.htmlUrl).toEqual('https://github.com/cmschuetz/vscode-wal');
      expect(Object.values(repositoryList)[0].attributes.forksCount).toEqual(0);
      expect(Object.values(repositoryList)[0].attributes.watchersCount).toEqual(1);
      expect(Object.values(repositoryList)[0].attributes.stargazersCount).toEqual(1);
      expect(Object.values(repositoryList)[0].attributes.longName).toEqual('cmschuetz/vscode-wal');
      expect(Object.values(repositoryList)[0].attributes.description).toEqual('Fake description Jason added');
      expect(Object.values(repositoryList)[0].attributes.owner.login).toEqual('cmschuetz');
      expect(Object.values(repositoryList)[0].attributes.owner.htmlUrl).toEqual('https://github.com/cmschuetz');
      expect(Object.keys(repositoryList).length).toEqual(30);
    });
  });
});
