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
      return <li key={idx} className='language-list-item'>{language.title}</li>;
    });
  }

  public render() {
    return (
      <ul id='language-list'>
        {this.languageList}
      </ul>
    );
  }
}
