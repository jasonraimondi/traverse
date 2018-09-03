import axios, { AxiosPromise } from 'axios';

interface IProps {
  [name: string]: string;
}

interface IHeaders {
  [name: string]: string;
}

export function GithubRestClient(path: string, params?: IProps, headers?: IHeaders, timeout = 5000): AxiosPromise {
  params = {
    ...params,
    // access_token: '',
  };

  headers = {
    ...headers,
    Accept: 'application/vnd.github.v3+json',
  };

  return axios.get(
    `https://api.github.com${path}`,
    { headers, params, timeout },
  );
}
