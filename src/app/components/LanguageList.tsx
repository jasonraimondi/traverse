import { Language } from '@/app/components/Language';
import { LanguagePicker } from '@/app/components/LanguagePicker';
import * as React from 'react';
import styled from 'styled-components';

export interface ILanguage {
  title: string;
  value: string;
}

interface IProps {
  allLanguageList: ILanguage[];
  popularLanguageList: ILanguage[];
  selectedLanguage: string;
  handleSetLanguage: (language: string) => void;
}

type selectedLanguageListType = 'all' | 'popular';

interface IState {
  selectedLanguageListType: selectedLanguageListType;
  selectedLanguage: string;
}

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export class LanguageList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
    this.state = {
      selectedLanguageListType: 'popular',
      selectedLanguage: props.selectedLanguage,
    };
  }

  public handleSetLanguage(language: string) {
    this.setState({ selectedLanguage: language }, () => this.props.handleSetLanguage(language));
  }

  get languageList() {
    let languageList = this.props.popularLanguageList;

    if (this.state.selectedLanguageListType === 'all') {
      languageList = this.props.allLanguageList;
    }

    return languageList.map((language, idx) => {
      const isSelected = this.state.selectedLanguage === language.value;
      return <Language key={idx}
                       isSelected={isSelected}
                       language={language}
                       selectLanguage={() => this.handleSetLanguage(language.value)}
      />;
    });
  }

  public render() {
    return (
      <>
        <LanguagePicker selectedLanguageListType={this.state.selectedLanguageListType} />
        <List id='language-list'>
          {this.languageList}
        </List>
      </>
    );
  }
}
