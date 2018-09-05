import * as React from 'react';

export interface ILanguage {
  title: string;
  value: string;
}

interface IProps {
  languageList: ILanguage[];
  selectedLanguage: string;
  handleSetLanguage: (language: string) => void;
}

interface IState {
  selectedLanguage: string;
}

export class LanguageList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
    this.state = {
      selectedLanguage: props.selectedLanguage,
    };
  }

  public handleSetLanguage(language: string) {
    this.setState({ selectedLanguage: language }, () => this.props.handleSetLanguage(language));
  }

  get languageList() {
    return this.props.languageList.map((language, idx) => {
      return (
        <li key={idx}
            className='language-list-item'
        >
          <a onClick={() => this.handleSetLanguage(language.value)}>{language.title}</a>
        </li>
      );
    });
  }

  public render() {
    return (
      <ul id='language-list'>
        <li><p id='selected-language'>Frequency: {this.state.selectedLanguage}</p></li>
        {this.languageList}
      </ul>
    );
  }
}
