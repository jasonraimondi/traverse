import { AxiosPromise } from 'axios';

import { AxiosRestClient, RestClientInterface } from '@/infrastructure/rest/axios-rest-client';

export class GithubRestClient implements RestClientInterface {
  constructor(
    readonly restClient: AxiosRestClient,
    private readonly githubAccessToken: string|null,
  ) {
  }

  private get accessToken() {
    const accessToken = this.githubAccessToken;
    return accessToken === null ? {} : { access_token: accessToken };
  }

  get(path: string, queryParams = {}, headers = {}, timeout: number = 5000): AxiosPromise {
    return this.restClient.get(
      path,
      this.mergeQueryParams(queryParams),
      this.mergeHeaders(headers),
      timeout,
    );
  }

  post(path: string, formParams = {}, headers = {}, timeout: number = 5000): AxiosPromise {
    return this.restClient.post(
      path,
      formParams,
      this.mergeHeaders(headers),
      timeout,
    );
  }

  private mergeHeaders(headers = {}) {
    return {
      ...headers,
      Accept: 'application/vnd.github.v3+json',
    };
  }

  private mergeQueryParams(params: {}) {
    return {
      ...params,
      ...this.accessToken,
    };
  }
}
