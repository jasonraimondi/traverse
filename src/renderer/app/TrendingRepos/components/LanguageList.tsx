import { UnstyledList } from '@/renderer/elements/Base';
import * as React from 'react';
import styled from 'styled-components';

import { LanguageDetail } from '@/renderer/app/TrendingRepos/components/LanguageDetail';
import { ListType } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

export interface ILanguage {
  title: string;
  value: string;
}

interface Props {
  allLanguageList: ILanguage[];
  popularLanguageList: ILanguage[];
  selectedLanguage: ILanguage;
  languageListType: ListType;
  handleSetLanguage: (language: ILanguage) => void;
}

export class LanguageList extends React.Component<Props> {
  get languageList() {
    let languageList = this.props.popularLanguageList;

    if (this.props.languageListType === 'all') {
      languageList = this.props.allLanguageList;
    }

    return languageList.map((language: ILanguage, idx) => {
      const isSelected = this.props.selectedLanguage.value === language.value;
      return <LanguageDetail key={idx}
                             isSelected={isSelected}
                             language={language}
                             selectLanguage={() => this.props.handleSetLanguage(language)}
      />;
    });
  }

  render() {
    return (
      <List id='language-list'>
        <ListTitle>{this.props.languageListType === 'all' ? 'Full' : 'Popular'} List</ListTitle>
        {this.languageList}
      </List>
    );
  }
}

const List = styled(UnstyledList)`
`;

const ListTitle = styled.li`
  background-color: ${themeConfig.colors.white};
  width: 100%;
  text-align: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  font-weight: 700;
  padding-top: 0.65rem;
`;
