import { Owner } from '@/renderer/infrastructure/model/User.entity';

export class RepositoryEntity {
  readonly isUser: boolean;
  readonly isOrganization: boolean;

  constructor(
    readonly id: string | number,
    readonly attributes?: RepositoryEntityAttributes,
  ) {
    this.isUser = this.attributes && this.attributes.owner.type === 'user';
    this.isOrganization = this.attributes && this.attributes.owner.type === 'organization';
  }

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
