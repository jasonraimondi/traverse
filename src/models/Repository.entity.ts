export class RepositoryEntity {

  public static fromResponse(response: any) {
    return new RepositoryEntity(
      response.id,
      {
        name: response.name,
        description: response.description,
        language: response.language,
        owner: {
          login: response.owner.login,
          htmlUrl: response.owner.html_url,
          avatarUrl: response.owner.avatar_url,
        } as Owner,
        longName: response.full_name,
        htmlUrl: response.html_url,
        stargazersCount: response.stargazers_count,
        watchersCount: response.watchers_count,
        forksCount: response.forks_count,
      },
    );
  }

  constructor(
    public readonly id: string,
    public readonly attributes?: RepositoryEntityAttributes,
  ) {
  }
}

interface RepositoryEntityAttributes {
  name: string;
  description: string;
  language: string;
  owner: Owner;
  longName: string;
  htmlUrl: string;
  stargazersCount: number;
  watchersCount: number;
  forksCount: number;
}

interface Owner {
  readonly login: string;
  readonly htmlUrl: string;
  readonly avatarUrl: string;
}
