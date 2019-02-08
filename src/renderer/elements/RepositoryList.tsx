import * as React from 'react';
import styled from 'styled-components';

import { CenterContainer, UnstyledList } from '@/renderer/elements/Base';
import { RepositoryDetail } from '@/renderer/elements/RepositoryDetail';
import { RepositoryEntity } from '@/renderer/infrastructure/model/Repository.entity';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

interface Props {
  loading: boolean;
  emptyRepositoryList?: JSX.Element|string;
  repositoryList: RepositoryEntity[];
  lastUpdatedAt?: Date|null;
  handleStarRepository(repository: RepositoryEntity): void;
  handleStargazerClick(login: string): void;
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
      const login = repository.attributes.owner.login;
      return <RepositoryDetail
        key={idx}
        handleStarRepository={() => this.props.handleStarRepository(repository)}
        handleStargazerClick={() => this.props.handleStargazerClick(login)}
        repository={repository}
      />;
    });
  }

  render() {
    if (this.props.loading) {
      return <CenterContainer style={{ height: '100%'}}>
        <img src='../resources/traverse-spinner-cropped.gif' alt='traverse spinner logo' height='150px' />
      </CenterContainer>;
    }

    return <List id='repository-list'>
      {this.listItems}
      {this.props.lastUpdatedAt ? (
        <LastUpdated>Last Updated: <span>{this.props.lastUpdatedAt.toLocaleString()}</span></LastUpdated>
      ) : null}
    </List>;
  }
}

const List = styled(UnstyledList)`
  height: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
  padding-bottom: 0;
`;

const LastUpdated = styled.p`
  margin-bottom: 0;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.5rem 0;
  background-color: ${themeConfig.colors.greyLightest};
`;
