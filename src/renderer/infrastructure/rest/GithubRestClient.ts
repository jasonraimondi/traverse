import { AxiosPromise } from 'axios';
import { inject, injectable } from 'inversify';

import TYPES from '@/renderer/infrastructure/container/Types';
import { AxiosRestClient, RestClientInterface } from '@/renderer/infrastructure/rest/AxiosRestClient';

@injectable()
export class GithubRestClient implements RestClientInterface {
  githubAccessToken: string = null;

  constructor(
    @inject(TYPES.AxiosRestClient) private readonly restClient: AxiosRestClient,
  ) {
    this.setBaseURL('https://api.github.com');
  }

  setBaseURL(baseURL: string): void {
    this.restClient.setBaseURL(baseURL);
  }

  get(path: string, queryParams = {}, headers = {}, timeout: number = 5000): AxiosPromise {
    return this.restClient.get(
      path,
      this.mergeQueryParams(queryParams),
      this.mergeHeaders(headers),
      timeout,
    );
  }

  post(path: string, form = {}, query = {}, headers = {}, timeout: number = 5000): AxiosPromise {
    return this.restClient.post(
      path,
      form,
      this.mergeQueryParams(query),
      this.mergeHeaders(headers),
      timeout,
    );
  }

  put(path: string, form = {}, query = {}, headers = {}, timeout: number = 5000): AxiosPromise {
    return this.restClient.put(
      path,
      form,
      this.mergeQueryParams(query),
      this.mergeHeaders(headers),
      timeout,
    );
  }

  delete(path: string, query = {}, headers = {}, timeout: number = 5000): AxiosPromise {
    return this.restClient.delete(
      path,
      this.mergeQueryParams(query),
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
    const accessToken = this.githubAccessToken ? { access_token: this.githubAccessToken } : {};
    return {
      ...params,
      ...accessToken,
    };
  }

}
