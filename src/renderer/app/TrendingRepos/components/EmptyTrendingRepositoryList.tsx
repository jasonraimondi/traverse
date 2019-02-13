import * as React from 'react';
import styled from 'styled-components';

import { ILanguage } from '@/renderer/app/TrendingRepos/components/LanguageList';
import { FrequencyType } from '@/renderer/infrastructure/model/Frequency.type';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

interface Props {
  language: ILanguage;
  frequency: FrequencyType;
}

export class EmptyTrendingRepositoryList extends React.Component<Props> {
  private get githubLink(): string {
    return `https://github.com/trending/${this.props.language.value}?since=${this.props.frequency}`;
  }

  render() {
    return (
      <EmptyContainer>
        <h4>
          I didn't find any {this.props.language.title} repos trending {this.props.frequency}.
        </h4>
        <div>
          <CheckGithubLink href={this.githubLink} className='open-link-externally'>Check Github?</CheckGithubLink>
        </div>
      </EmptyContainer>
    );
  }
}

const CheckGithubLink = styled.a`
  color: ${themeConfig.colors.purple};
`;

const EmptyContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
`;
