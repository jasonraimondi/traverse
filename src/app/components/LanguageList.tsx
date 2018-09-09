import * as React from 'react';
import './LanguageList.pcss';

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
      const selectedClass = this.state.selectedLanguage === language.value ? 'selected' : null;
      return (
        <li key={idx}
            className='language-list-item'
        >
          <a className={selectedClass} onClick={() => this.handleSetLanguage(language.value)}>{language.title}</a>
        </li>
      );
    });
  }

  public render() {
    return (
      <div id='language-container'>
        <ul id='language-list'>
          {this.languageList}
        </ul>
      </div>
    );
  }
}
