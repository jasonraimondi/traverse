import axios, { AxiosError, AxiosPromise } from 'axios';

export interface RestClientInterface {
  get(path: string, queryParameters?: any, headers?: any, timeout?: number): AxiosPromise;
  post(path: string, formParameters?: any, headers?: any, timeout?: number): AxiosPromise;
}

export class AxiosRestClient implements RestClientInterface {
  constructor(private basePath: string = '/') {}

  get(path: string, queryParameters: any, headers: any = {}, timeout: number = 5000): AxiosPromise {
    return axios.get(
      this.makeUrl(path),
      {
        headers,
        params: queryParameters,
        timeout,
      },
    );
  }

  post(path: string, formParameters: any, headers: any = {}, timeout: number = 5000): AxiosPromise {
    return axios.post(
      this.makeUrl(path),
      formParameters,
      {
        headers,
        timeout,
      },
    );
  }

  private makeUrl(path: string): string {
    if (path[0] === '/') {
      path = path.slice(1);
    }
    return `${this.basePath}/${path}`;
  }

  static handleError(err: AxiosError) {
    if (err.response.status === 403) {
      throw new Error('Hold on there Jethro! API Limit Reached');
    }

    const url = err.response.data.documentation_url || 'err';
    const message = err.response.data.message || 'Something went wrong!';
    throw new Error(`${message} ${url}`);
  }
}
