import { UnstyledList } from '@/app/elements/base';
import { EmptyRepositoryList } from '@/app/TrendingRepos/EmptyRepositoryList';
import { ILanguage } from '@/app/TrendingRepos/LanguageList';
import { FrequencyType } from '@/models/Frequency.type';
import * as React from 'react';
import styled from 'styled-components';

import { RepositoryDetail } from '@/app/TrendingRepos/RepositoryDetail';
import { RepositoryEntity } from '@/models/Repository.entity';

interface Props {
  language: ILanguage;
  frequency: FrequencyType;
  repositoryList: { [id: string]: RepositoryEntity };
}

export class RepositoryList extends React.Component<Props> {
  get listItems() {
    let keyCount = 0;
    return Object.values(this.props.repositoryList).map((repository) => {
      return <RepositoryDetail key={keyCount++} repository={repository}/>;
    });
  }

  get emptyList() {
    return <EmptyRepositoryList language={this.props.language} frequency={this.props.frequency} />;
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
`;
