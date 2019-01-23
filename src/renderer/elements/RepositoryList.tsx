import * as React from 'react';
import styled from 'styled-components';

import { UnstyledList } from '@/renderer/elements/Base';
import { RepositoryDetail } from '@/renderer/elements/RepositoryDetail';
import { RepositoryEntity } from '@/renderer/model/Repository.entity';

interface Props {
  handleStargazerClick(login: string): void;

  emptyRepositoryList?: JSX.Element;
  repositoryList: RepositoryEntity[];
}

export class RepositoryList extends React.Component<Props> {
  static readonly FORKS_ICON = require('@/assets/icons/icon-arrows-split.svg');
  static readonly STARGAZERS_ICON = require('@/assets/icons/icon-star.svg');
  static readonly WATCHERS_ICON = require('@/assets/icons/icon-user-circle.svg');

  get listItems() {
    if (this.props.repositoryList.length === 0 && this.props.emptyRepositoryList) {
      return this.props.emptyRepositoryList;
    }

    return this.props.repositoryList.map((repository, idx) => {
      const {owner} = repository.attributes;
      const handleStargazerClick = () => this.props.handleStargazerClick(owner.login);
      return <RepositoryDetail
        key={idx}
        handleStargazerClick={handleStargazerClick}
        repository={repository}
      />;
    });
  }

  render() {
    return <List id='repository-list'>{this.listItems}</List>;
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
