import * as React from 'react';

import { RepositoryEntity } from '../../models/Repository.entity';
import { Repository } from './Repository';

interface IProps {
  repositoryList: { [id: string]: RepositoryEntity };
}

export class RepositoryList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  get listItems() {
    let keyCount = 0;
    return Object.values(this.props.repositoryList).map((repository) => {
      return <Repository key={keyCount++} repository={repository}/>;
    });
  }

  public render() {
    return (
      <ul id='repository-list'>
        {this.listItems}
      </ul>
    );
  }
}
