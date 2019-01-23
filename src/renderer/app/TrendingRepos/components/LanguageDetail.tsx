import * as React from 'react';
import styled from 'styled-components';

import { ILanguage } from '@/renderer/app/TrendingRepos/components/LanguageList';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

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
  color: ${themeConfig.colors.black};
  background-color: ${themeConfig.colors.white};
  border: none;
  &:active, &:hover, &.selected {
    outline: none;
  }
  &:active span, &:hover span, &.selected span {
    color: ${themeConfig.colors.white};
    background-color: ${themeConfig.colors.green};
  }
  &:hover span {
    background-color: ${themeConfig.colors.green};
  }
`;
