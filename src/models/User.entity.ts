export class UserEntity {

  static fromResponse(response: any) {
    return new UserEntity(
      response.id,
      {
        login: response.login,
        name: response.name,
        company: response.company,
        website: response.blog,
        location: response.location,
        email: response.email,
        bio: response.bio,
        type: response.type.toLowerCase(),
        publicRepoCount: response.public_repos,
        publicGistCount: response.public_gists,
        followersCount: response.followers,
        followingCount: response.following,
        htmlUrl: response.html_url,
        avatarUrl: response.avatar_url,
      } as UserAttributes,
    );
  }

  get isUser() {
    return this.attributes && this.attributes.type === 'user';
  }

  get isOrganization() {
    return this.attributes && this.attributes.type === 'organization';
  }

  constructor(
    readonly id: string | number,
    readonly attributes?: UserAttributes,
  ) {
  }
}

export interface UserAttributes extends Owner {
  name?: string;
  company?: string|null;
  website?: string|null;
  location?: string|null;
  email?: string|null;
  bio?: string|null;
  publicRepoCount?: number|null;
  publicGistCount?: number|null;
  followersCount?: number|null;
  followingCount?: number|null;
}

export interface Owner {
  readonly login?: string;
  readonly htmlUrl?: string;
  readonly avatarUrl?: string;
  readonly type?: 'organization'|'user'|null;
}
