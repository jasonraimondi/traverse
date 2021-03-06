import * as React from 'react';
import styled from 'styled-components';

import { DiceRoller } from '@/renderer/app/TrendingRepos/components/DiceRoller';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

export type ListType = 'all' | 'popular';

interface Props {
  selected: ListType;
  handleSetLanguageList(listType: ListType): void;
  onClickRoll(): void;
}

export class LanguageListPicker extends React.Component<Props> {
  readonly iconAll = require('@/assets/icons/icon-collection.svg');
  readonly iconPopular = require('@/assets/icons/icon-launch.svg');

  render() {
    return <LanguageSelect id='language-select'>
      <DiceRoller onClickRoll={this.props.onClickRoll}/>
      <Icon className={this.props.selected === 'all' ? 'selected' : null}
            onClick={() => this.handleSelectLanguage('all')}
            title='All Languages'
            dangerouslySetInnerHTML={{ __html: this.iconAll }}
      />
      <Icon className={this.props.selected === 'popular' ? 'selected' : null}
            onClick={() => this.handleSelectLanguage('popular')}
            title='Popular Languages'
            dangerouslySetInnerHTML={{ __html: this.iconPopular }}
      />
    </LanguageSelect>;
  }

  private handleSelectLanguage(listType: ListType) {
    this.props.handleSetLanguageList(listType);
  }
}

const LanguageSelect = styled.div`
  width: 140px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.span`
  margin-right: 0.5rem;
  &:last-child {
    margin-right: 0;
  }
  & svg {
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${themeConfig.colors.white};
    border-radius: 999px;
    padding: 0.1rem;
  }
  & .primary {
    fill: ${themeConfig.colors.greyDarker};
  }
  & .secondary {
    fill: ${themeConfig.colors.grey};
  }
  &.selected .primary {
    fill: ${themeConfig.colors.greenDarker};
  }
  &.selected .secondary {
    fill: ${themeConfig.colors.green};
  }
`;
