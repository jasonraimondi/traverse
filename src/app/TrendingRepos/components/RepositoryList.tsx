import { RepositoryListReducer } from '@/infrastructure/redux/reducers/RepositoryList.reducer';
import * as React from 'react';
import styled from 'styled-components';

import { UnstyledList } from '@/app/elements/Base';
import { EmptyRepositoryList } from '@/app/TrendingRepos/components/EmptyRepositoryList';
import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import { RepositoryDetail } from '@/app/TrendingRepos/components/RepositoryDetail';
import { FrequencyType } from '@/models/Frequency.type';

interface Props {
  language?: ILanguage;
  frequency?: FrequencyType;
  repositoryList: RepositoryListReducer;
}

export class RepositoryList extends React.Component<Props> {
  static readonly FORKS_ICON = require('@/infrastructure/assets/icons/icon-arrows-split.svg');
  static readonly STARGAZERS_ICON = require('@/infrastructure/assets/icons/icon-star.svg');
  static readonly WATCHERS_ICON = require('@/infrastructure/assets/icons/icon-user-circle.svg');

  get sortedRepositoryList() {
    return Object.values(this.props.repositoryList)
      .sort((a, b) => {
        if (a.attributes && b.attributes) {
          return b.attributes.stargazersCount - a.attributes.stargazersCount;
        }
        return -1;
      });
  }

  get listItems() {
    return this.sortedRepositoryList.map((repository, idx) => {
      return <RepositoryDetail key={idx} repository={repository}/>;
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
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
`;
