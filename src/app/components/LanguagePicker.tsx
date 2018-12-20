import * as React from 'react';
import styled from 'styled-components';

const LanguageSelect = styled.div`
  margin: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: blue;
`;

interface Props {
  selectedLanguageListType: 'all'|'popular';
}

export class LanguagePicker extends React.Component<Props> {
  public render() {
    return <LanguageSelect id='language-list-type'>
      <a className={this.props.selectedLanguageListType === 'all' ? 'selected' : null}
         onClick={() => this.setState({ selectedLanguageListType: 'all' })}
      >
        ALL
      </a>
      <a className={this.props.selectedLanguageListType === 'popular' ? 'selected' : null}
         onClick={() => this.setState({ selectedLanguageListType: 'popular' })}
      >
        POPULAR
      </a>
    </LanguageSelect>;
  }
}
