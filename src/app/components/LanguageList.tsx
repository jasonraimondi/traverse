import * as React from 'react';

export interface ILanguage {
  title: string;
  value: string;
}

interface IProps {
  allLanguageList: ILanguage[],
  popularLanguageList: ILanguage[],
  selectedLanguage: string;
  handleSetLanguage: (language: string) => void;
}

type selectedLanguageListType = 'all' | 'popular';

interface IState {
  selectedLanguageListType: selectedLanguageListType;
  selectedLanguage: string;
}

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
        <div id='language-list-type'>
          <a className={this.state.selectedLanguageListType === 'all' ? 'selected' : null}
             onClick={() => this.setState({ selectedLanguageListType: 'all' })}
          >
            ALL
          </a>
          <a className={this.state.selectedLanguageListType === 'popular' ? 'selected' : null}
             onClick={() => this.setState({ selectedLanguageListType: 'popular' })}
          >
            POPULAR
          </a>
        </div>
        <ul id='language-list'>
          {this.languageList}
        </ul>
      </div>
    );
  }
}
