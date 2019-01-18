import axios, { AxiosError, AxiosPromise } from 'axios';
import { injectable } from 'inversify';

export interface RestClientInterface {
  setBaseURL(baseURL: string): void;

  get(path: string, queryParameters?: any, headers?: any, timeout?: number): AxiosPromise;

  post(path: string, formParameters?: any, headers?: any, timeout?: number): AxiosPromise;
  put(path: string, formParameters?: any, headers?: any, timeout?: number): AxiosPromise;
  delete(path: string, formParameters?: any, headers?: any, timeout?: number): AxiosPromise;
}

@injectable()
export class AxiosRestClient implements RestClientInterface {
  private readonly axios = axios.create();

  setBaseURL(baseURL: string): void {
    this.axios.defaults.baseURL = baseURL;
  }

  get(path: string, queryParameters: any = {}, headers: any = {}, timeout: number = 5000): AxiosPromise {
    return this.axios.get(
      path,
      {
        headers,
        params: queryParameters,
        timeout,
      },
    );
  }

  post(path: string, formParameters: any = {}, headers: any = {}, timeout: number = 5000): AxiosPromise {
    return this.axios.post(
      path,
      formParameters,
      {
        headers,
        timeout,
      },
    );
  }

  put(path: string, formParameters: any = {}, headers: any = {}, timeout: number = 5000): AxiosPromise {
    return this.axios.put(
      path,
      formParameters,
      {
        headers,
        timeout,
      },
    );
  }

  delete(path: string, headers: any = {}, timeout: number = 5000): AxiosPromise {
    return this.axios.delete(
      path,
      {
        headers,
        timeout,
      },
    );
  }

  static handleError(err: AxiosError) {
    if (err.response.status === 403) {
      throw new Error('Hold on there Jethro! API Limit Reached');
    }

    let url: string;
    let message: string;

    if (err.response.data) {
      url = err.response.data.documentation_url;
      message = err.response.data.message;
    } else {
      url = '';
      message = 'Rest Client Error!';
    }

    throw new Error(`${message} ${url}`);
  }
}
