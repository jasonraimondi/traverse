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
    const language = this.attributes ? this.attributes.language : false;
    const htmlUrl = this.attributes ? this.attributes.htmlUrl : null;
    return (
      <li className='repository-list-item'>
        <a href={htmlUrl} className='open-link-externally'>
          <span className='name'>{name}</span>
        </a>
        {language ? <small style={{ color: 'grey' }} className='language'>{language}</small> : null}
      </li>
    );
  }
}
