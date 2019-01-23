import { Owner } from '@/models/User.entity';

export class RepositoryEntity {

  static fromResponse(response: any) {
    return new RepositoryEntity(
      response.id,
      {
        name: response.name,
        description: response.description,
        language: response.language,
        owner: {
          login: response.owner.login,
          type: response.owner.type.toLowerCase(),
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

  get owner(): Owner {
    return this.attributes.owner;
  }

  get isUser(): boolean {
    return this.attributes && this.attributes.owner.type === 'user';
  }

  get isOrganization(): boolean {
    return this.attributes && this.attributes.owner.type === 'organization';
  }

  constructor(
    readonly id: string|number,
    readonly attributes?: RepositoryEntityAttributes,
  ) {
  }
}

export interface RepositoryEntityAttributes {
  name?: string;
  description?: string;
  language?: string;
  owner?: Owner;
  longName?: string;
  htmlUrl?: string;
  stargazersCount?: number;
  watchersCount?: number;
  forksCount?: number;
}
