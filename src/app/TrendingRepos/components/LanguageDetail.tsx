import { theme } from '@/infrastructure/styles/theme';
import * as React from 'react';
import styled from 'styled-components';

import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';

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
        <Title>{this.props.language.title}</Title>
      </LanguageButton>
    </LanguageContainer>;
  }
}

const Title = styled.span`
  padding: 0.2rem 0.4rem 0.3rem;
  border-radius: 0.5rem;
`;

const LanguageContainer = styled.li`
`;

const LanguageButton = styled.button`
  padding: 7.5px 0;
  width: 100%;
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  border: none;
  &:active, &:hover, &.selected {
    outline: none;
  }
  &:active span, &:hover span, &.selected span {
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
  }
  &:hover span {
    background-color: ${theme.colors.green};
  }
`;
