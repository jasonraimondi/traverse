import * as React from 'react';

import { RepositoryEntity } from '../../models/Repository.entity';

interface InferProps {
  repository: RepositoryEntity;
}

export class Repository extends React.Component<InferProps> {
  public get attributes() {
    return this.props.repository.attributes;
  }

  public render() {
    const name = this.attributes ? this.attributes.name : 'No Name';
    const description = this.attributes ? this.attributes.description : false;
    return <li className='repository-list-item'>
      <span className='name'>{name}</span>
      {description ? <span className='description'>{description}</span> : null}
    </li>;
  }
}
