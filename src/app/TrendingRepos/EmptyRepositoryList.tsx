import { ILanguage } from '@/app/TrendingRepos/LanguageList';
import { FrequencyType } from '@/models/Frequency.type';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  language: ILanguage;
  frequency: FrequencyType;
}

export class EmptyRepositoryList extends React.Component<Props> {
  get githubLink(): string {
    return `https://github.com/trending/${this.props.language.value}?since=${this.props.frequency}`;
  }

  public render() {
    return (
      <EmptyContainer>
        <h4>
          I didn't find any {this.props.language.title} repos trending {this.props.frequency}.
        </h4>
        <div>
          <a href={this.githubLink} className='open-link-externally'>Check Github?</a>
        </div>
      </EmptyContainer>
    );
  }
}

const EmptyContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
