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
    const language = this.attributes ? this.attributes.language : false;
    return (
      <li className='repository-list-item'>
        <span className='name'>{name}</span>
        {language ? <small style={{ color: 'grey' }} className='language'>{language}</small> : null}
      </li>
    );
  }
}
