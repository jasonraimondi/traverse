import * as React from 'react';

import { RepositoryEntity } from '../../models/Repository.entity';
import './Repository.pcss';

interface InferProps {
  repository: RepositoryEntity;
}

export class Repository extends React.Component<InferProps> {
  public get attributes() {
    return this.props.repository.attributes;
  }

  public get longName() {
    const longName = this.attributes ? this.attributes.longName : 'Unknown';
    return <p className='name'>{longName.replace('/', ' / ')}</p>;
  }

  public get language() {
    const language = this.attributes && this.attributes.language !== null ? this.attributes.language : 'Unknown';
    return <p className='language'>{language}</p>;
  }

  public get description() {
    const description = this.attributes ? this.attributes.description : false;
    if (description) {
      return <p className='description'>{description}</p>;
    }
    return null;
  }

  public get forksCount() {
    const forksCount = this.attributes ? this.attributes.forksCount : false;
    return <p className='forks-count'>Forks: {forksCount}</p>;
  }

  public get watchersCount() {
    const watchersCount = this.attributes ? this.attributes.watchersCount : false;
    return <p className='watchers-count'>Watchers: {watchersCount}</p>;
  }

  public get stargazersCount() {
    const stargazersCount = this.attributes ? this.attributes.stargazersCount : false;
    return <p className='stargazers-count'>Stargazers: {stargazersCount}</p>;
  }

  public get htmlUrl() {
    return this.attributes ? this.attributes.htmlUrl : null;
  }

  public render() {
    return (
      <li className='repository-list-item'>
        <header>
          <a href={this.htmlUrl} className='open-link-externally name'>
            {this.longName}
          </a>
          {this.language}
        </header>
        <article>
          {this.description}
        </article>
        <footer>
          {this.forksCount}
          {this.stargazersCount}
          {this.watchersCount}
        </footer>
      </li>
    );
  }
}
