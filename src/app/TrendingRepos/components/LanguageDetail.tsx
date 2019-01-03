import { theme } from '@/infrastructure/styles/theme';
import * as React from 'react';
import styled from 'styled-components';

import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';

const LanguageContainer = styled.li`
`;

const LanguageButton = styled.button`
  padding: 7.5px 0;
  width: 100%;
  color: black;
  border: none;
  &:active, &:hover, &.selected {
    outline: none;
    color: ${theme.colors.white};
    background-color: ${theme.colors['purple-darker']};
  }
  &:hover {
    background-color: ${theme.colors.purple};
  }
`;

interface Props {
  language: ILanguage;
  isSelected: boolean;
  selectLanguage(): void;
}

export class LanguageDetail extends React.Component<Props> {
  render() {
    return <LanguageContainer className='language-list-item'>
      <LanguageButton className={this.props.isSelected ? 'selected' : null}
             onClick={this.props.selectLanguage}>
        {this.props.language.title}
      </LanguageButton>
    </LanguageContainer>;
  }
}
