import * as React from 'react';
import styled from 'styled-components';

import { ILanguage } from '@/app/TrendingRepos/LanguageList';
import { FrequencyType } from '@/models/Frequency.type';

interface Props {
  frequency: FrequencyType;
  language: ILanguage;
}

const Title = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;

export class TitleBar extends React.Component<Props> {
  render() {
    return (
      <Title className='title-bar'>
        <span className='selected-frequency'>{this.ucFirst(this.props.frequency)}</span>
        &nbsp;
        <span className='selected-language'>{this.filterLanguage(this.props.language.title)}</span>
      </Title>
    );
  }

  private ucFirst(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }

  private filterLanguage(language: string): string {
    if (language === '') {
      return 'All Languages';
    }
    return language;
  }
}
