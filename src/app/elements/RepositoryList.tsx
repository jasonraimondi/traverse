import { RepositoryEntity } from '@/models/Repository.entity';
import * as React from 'react';
import styled from 'styled-components';

import { RepositoryDetail } from '@/app/elements/RepositoryDetail';
import { UnstyledList } from '@/app/elements/Base';

interface Props {
  handleStargazerClick(login: string): void;
  emptyRepositoryList: string|JSX.Element;
  repositoryList: RepositoryEntity[];
}

export class RepositoryList extends React.Component<Props> {
  static readonly FORKS_ICON = require('@/infrastructure/assets/icons/icon-arrows-split.svg');
  static readonly STARGAZERS_ICON = require('@/infrastructure/assets/icons/icon-star.svg');
  static readonly WATCHERS_ICON = require('@/infrastructure/assets/icons/icon-user-circle.svg');

  get listItems() {
    return this.props.repositoryList.map((repository, idx) => {
      const handleStargazerClick = () => this.props.handleStargazerClick(repository.attributes.owner.login);
      return <RepositoryDetail handleStargazerClick={handleStargazerClick}
                               key={idx}
                               repository={repository}
      />;
    });
  }

  get emptyList() {
    return this.props.emptyRepositoryList;
  }

  render() {
    return <List id='repository-list'>
      {this.listItems.length === 0 ? this.emptyList : this.listItems}
    </List>;
  }
}

const List = styled(UnstyledList)`
  flex: 1;
  overflow-y: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
`;
