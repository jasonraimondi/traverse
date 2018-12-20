import { Language } from '@/app/components/Language';
import { LanguagePicker, ListType } from '@/app/components/LanguagePicker';
import * as React from 'react';
import styled from 'styled-components';

export interface ILanguage {
  title: string;
  value: string;
}

interface Props {
  allLanguageList: ILanguage[];
  popularLanguageList: ILanguage[];
  selectedLanguage: string;
  selectedLanguageListType: ListType;
  handleSetLanguage: (language: string) => void;
}

const List = styled.ul`
  list-style-type: none;
  margin: 0
  padding-left: 0;
`;

export class LanguageList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  public handleSetLanguage(language: string) {
    this.props.handleSetLanguage(language);
  }

  get languageList() {
    let languageList = this.props.popularLanguageList;

    if (this.props.selectedLanguageListType === 'all') {
      languageList = this.props.allLanguageList;
    }

    return languageList.map((language, idx) => {
      const isSelected = this.props.selectedLanguage === language.value;
      return <Language key={idx}
                       isSelected={isSelected}
                       language={language}
                       selectLanguage={() => this.handleSetLanguage(language.value)}
      />;
    });
  }

  public render() {
    return (
      <List id='language-list'>
        {this.languageList}
      </List>
    );
  }
}
