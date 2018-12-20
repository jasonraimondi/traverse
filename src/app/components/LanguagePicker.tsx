import * as React from 'react';
import styled from 'styled-components';

const LanguageSelect = styled.div`
  background-color: purple;
  flex: 1;
`;

export type ListType = 'all' | 'popular';

const Icon = styled.a`
  width: 25px;
  color: white;
  border-color: orange;
  > svg {
    max-height: 100%;
    max-width: 100%;
    height: 100%;
    fill: currentColor;
    stroke: currentColor;
  }
`;

interface Props {
  selected: ListType;

  handleSetLanguageList(listType: ListType): void;
}

export class LanguagePicker extends React.Component<Props> {
  public readonly iconAll = require('@/icons/infinity.svg');
  public readonly iconPopular = require('@/icons/fire.svg');

  public render() {
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
