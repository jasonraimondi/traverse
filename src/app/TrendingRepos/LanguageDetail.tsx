import * as React from 'react';
import styled from 'styled-components';

import { ILanguage } from '@/app/TrendingRepos/LanguageList';

const LanguageContainer = styled.li`
  padding: 7.5px 0;
`;

const LanguageButton = styled.button`
  width: 100%;
  color: black;
  border: none;
  border-radius: 19px;
  &:active, &.selected {
    text-decoration: underline;
    outline: none;
  }
  &:hover {
    color: grey;
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
