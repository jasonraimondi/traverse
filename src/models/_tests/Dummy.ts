import * as faker from 'faker';

import { RepositoryEntity, RepositoryEntityAttributes } from '@/models/Repository.entity';
import { Owner, UserAttributes, UserEntity } from '@/models/User.entity';

export function DummyRepositoryEntity(id?: number, attributes?: RepositoryEntityAttributes) {
  if (!id) {
    id = faker.random.number();
  }
  if (!attributes) {
    attributes = {
      description: faker.lorem.words,
      language: 'TypeScript',
      owner: {
        login: faker.internet.username,
        htmlUrl: faker.internet.url,
        avatarUrl: faker.image.imageUrl,
        type: faker.random.arrayElement('organization', 'user'),
      },
    };
  }
  return new RepositoryEntity(id, attributes);
}

export function DummyUserEntity(id?: number, attributes?: UserAttributes) {
  if (!id) {
    id = faker.random.number();
  }
  if (!attributes) {
    attributes = {
      name: faker.name.firstName + faker.name.lastName,
      company: faker.company.companyName,
      website: faker.internet.url,
    } as UserAttributes;
  }
  return new UserEntity(id, attributes);
}
