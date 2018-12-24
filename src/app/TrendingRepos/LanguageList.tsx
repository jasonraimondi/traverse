import * as React from 'react';
import styled from 'styled-components';

import { UnstyledList } from '@/app/elements/base';
import { LanguageDetail } from '@/app/TrendingRepos/LanguageDetail';
import { ListType } from '@/app/TrendingRepos/LanguageListPicker';

export interface ILanguage {
  title: string;
  value: string;
}

interface Props {
  allLanguageList: ILanguage[];
  popularLanguageList: ILanguage[];
  selectedLanguage: ILanguage;
  selectedLanguageListType: ListType;
  handleSetLanguage: (language: ILanguage) => void;
}

const List = styled(UnstyledList)`
`;

export class LanguageList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  handleSetLanguage(language: ILanguage) {
    this.props.handleSetLanguage(language);
  }

  get languageList() {
    let languageList = this.props.popularLanguageList;

    if (this.props.selectedLanguageListType === 'all') {
      languageList = this.props.allLanguageList;
    }

    return languageList.map((language: ILanguage, idx) => {
      const isSelected = this.props.selectedLanguage === language;
      return <LanguageDetail key={idx}
                             isSelected={isSelected}
                             language={language}
                             selectLanguage={() => this.handleSetLanguage(language)}
      />;
    });
  }

  render() {
    return (
      <List id='language-list'>
        {this.languageList}
      </List>
    );
  }
}
