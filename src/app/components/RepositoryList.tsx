import * as React from 'react';

import { Repository } from '@/app/components/Repository';
import { RepositoryEntity } from '@/models/Repository.entity';
import styled from 'styled-components';

interface Props {
  repositoryList: { [id: string]: RepositoryEntity };
}

const List = styled.ul`
  flex: 1;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  overflow-y: auto;
`;

export class RepositoryList extends React.Component<Props> {
  constructor(props: Props) {
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
      <List id='repository-list'>
        {this.listItems}
      </List>
    );
  }
}
