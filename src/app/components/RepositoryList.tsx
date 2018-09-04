import * as React from 'react';
import { RepositoryEntity } from '../../models/Repository.entity';

interface IProps {
  list: { [id: string]: RepositoryEntity };
}

export class RepositoryList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  get listItems() {
    return Object.values(this.props.list).map((repository) => {
      return <li key={repository.id}>{repository.name}</li>;
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
