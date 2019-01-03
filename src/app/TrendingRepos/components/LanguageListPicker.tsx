import { theme } from '@/infrastructure/styles/theme';
import * as React from 'react';
import styled from 'styled-components';

export type ListType = 'all' | 'popular';

interface Props {
  selected: ListType;

  handleSetLanguageList(listType: ListType): void;
}

export class LanguageListPicker extends React.Component<Props> {
  readonly iconAll = require('@/assets/icons/infinity.svg');
  readonly iconPopular = require('@/assets/icons/fire.svg');

  render() {
    return <LanguageSelect id='language-select'>
        <Icon className={this.props.selected === 'all' ? 'selected' : null}
              onClick={() => this.handleSelectLanguage('all')}
              dangerouslySetInnerHTML={{ __html: this.iconAll }}
        />
        <Icon className={this.props.selected === 'popular' ? 'selected' : null}
              onClick={() => this.handleSelectLanguage('popular')}
              dangerouslySetInnerHTML={{ __html: this.iconPopular }}
        />
      </LanguageSelect>;
  }

  private handleSelectLanguage(listType: ListType) {
    this.props.handleSetLanguageList(listType);
  }
}

const LanguageSelect = styled.div`
  width: 175px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.a`
  color: ${theme.colors.white};
  > svg {
    height: 1rem;
    max-height: 100%;
    max-width: 100%;
    fill: currentColor;
    stroke: currentColor;
    color: inherit;
  }
  &:first-child {
    margin-right: 1rem;
  }
`;
