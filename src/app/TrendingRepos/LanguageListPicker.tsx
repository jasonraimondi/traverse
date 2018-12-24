import * as React from 'react';
import styled from 'styled-components';

import { DieRoller } from '@/app/TrendingRepos/DieRoller';

export type ListType = 'all' | 'popular';

const LanguageSelect = styled.div`
  width: 175px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.a`
  color: white;
  border-color: orange;
  > svg {
    height: 1rem;
    max-height: 100%;
    max-width: 100%;
    fill: currentColor;
    stroke: currentColor;
  }
  &:first-child {
    margin-right: 1rem;
  }
`;

interface Props {
  selected: ListType;

  handleSetLanguageList(listType: ListType): void;
}

export class LanguageListPicker extends React.Component<Props> {
  readonly iconAll = require('@/icons/infinity.svg');
  readonly iconPopular = require('@/icons/fire.svg');

  render() {
    return <LanguageSelect id='language-select'>
      <DieRoller onClickRoll={() => console.log('hi')} />
      <Icon className={this.props.selected === 'all' ? 'selected' : null}
              onClick={() => this.handleSelectLanguageList('all')}
              dangerouslySetInnerHTML={{ __html: this.iconAll }}
        />
        <Icon className={this.props.selected === 'popular' ? 'selected' : null}
              onClick={() => this.handleSelectLanguageList('popular')}
              dangerouslySetInnerHTML={{ __html: this.iconPopular }}
        />
      </LanguageSelect>;
  }

  private handleSelectLanguageList(listType: ListType) {
    this.props.handleSetLanguageList(listType);
  }
}
