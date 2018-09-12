interface IProps {
  [name: string]: string;
}

interface IHeaders {
  [name: string]: string;
}

export function GitHubRest(path: string, params?: IProps, headers?: IHeaders, accessToken?: string) {
  params = {
    ...params,
  };

  if (accessToken) {
    params.access_token = accessToken;
  }

  headers = {
    ...headers,
    Accept: 'application/vnd.github.v3+json',
  };

  return {
    url: `https://api.github.com${path}`,
    config: { headers, params },
  };
}
