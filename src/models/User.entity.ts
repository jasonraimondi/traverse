export class UserEntity {

  static fromResponse(response: any) {
    return new UserEntity(
      response.id,
      {
        login: response.login,
        name: response.name,
        htmlUrl: response.html_url,
        avatarUrl: response.avatar_url,
      } as UserAttributes,
    );
  }

  constructor(
    readonly id: string | number,
    readonly attributes?: UserAttributes,
  ) {
  }
}

export interface UserAttributes extends Owner {
  name: string;
}

export interface Owner {
  readonly login: string;
  readonly htmlUrl: string;
  readonly avatarUrl: string;
}
