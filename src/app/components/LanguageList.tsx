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

const LanguageSelect = styled.div`
  margin: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: blue;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  padding: 7.5px 0;
`;

const Label = styled.button`
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
    this.setState({selectedLanguage: language}, () => this.props.handleSetLanguage(language));
  }

  get languageList() {
    let languageList = this.props.popularLanguageList;

    if (this.state.selectedLanguageListType === 'all') {
      languageList = this.props.allLanguageList;
    }

    return languageList.map((language, idx) => {
      const selectedClass = this.state.selectedLanguage === language.value ? 'selected' : null;
      return (
        <ListItem key={idx} className='language-list-item'>
          <Label className={selectedClass}
                 onClick={() => this.handleSetLanguage(language.value)}>
            {language.title}
          </Label>
        </ListItem>
      );
    });
  }

  public render() {
    return (
      <div id='language-container'>
        <LanguageSelect id='language-list-type'>
          <a className={this.state.selectedLanguageListType === 'all' ? 'selected' : null}
             onClick={() => this.setState({selectedLanguageListType: 'all'})}
          >
            ALL
          </a>
          <a className={this.state.selectedLanguageListType === 'popular' ? 'selected' : null}
             onClick={() => this.setState({selectedLanguageListType: 'popular'})}
          >
            POPULAR
          </a>
        </LanguageSelect>
        <List id='language-list'>
          {this.languageList}
        </List>
      </div>
    );
  }
}
