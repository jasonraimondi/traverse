import axios, { AxiosPromise } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { AxiosRestClient } from '@/infrastructure/rest/axios-rest-client';

import * as searchRepositoryData from '../../../../test/responses/fake-fetch-repository-list-success.json';

export class FakeRestClient extends AxiosRestClient {
  private readonly mock = new MockAdapter(axios);

  constructor() {
    super();
    this.mock.onGet('/search/repositories').reply(200, searchRepositoryData);
  }

  get(path: string, queryParameters: any, headers: any = {}, timeout: number = 5000): AxiosPromise {
    return axios.get(
      path,
      {
        headers,
        params: queryParameters,
        timeout,
      },
    );
  }

  post(path: string, formParameters: any, headers: any = {}, timeout: number = 5000): AxiosPromise {
    return axios.post(
      path,
      formParameters,
      {
        headers,
        timeout,
      },
    );
  }
}
