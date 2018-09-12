import * as React from 'react';
import './LanguageList.pcss';

export interface ILanguage {
  title: string;
  value: string;
}

interface IProps {
  languageList: {
    [name: string]: ILanguage[],
  };
  selectedLanguage: string;
  handleSetLanguage: (language: string) => void;
}

interface IState {
  languageListType: 'all' | 'popular';
  selectedLanguage: string;
}

export class LanguageList extends React.Component<IProps, IState> {
  public readonly ALL_LANGUAGES_KEY = 'All Languages';
  public readonly POPULAR_LANGUAGES_KEY = 'Popular Languages';

  constructor(props: IProps) {
    super(props);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
    this.state = {
      languageListType: 'popular',
      selectedLanguage: props.selectedLanguage,
    };
  }

  public handleSetLanguage(language: string) {
    this.setState({ selectedLanguage: language }, () => this.props.handleSetLanguage(language));
  }

  get languageList() {
    let languageList = this.props.languageList[this.POPULAR_LANGUAGES_KEY];

    if (this.state.languageListType === 'all') {
      languageList = this.props.languageList[this.ALL_LANGUAGES_KEY];
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
          <a className={this.state.languageListType === 'all' ? 'selected' : null}
             onClick={() => this.setState({ languageListType: 'all' })}
          >
            ALL
          </a>
          <a className={this.state.languageListType === 'popular' ? 'selected' : null}
             onClick={() => this.setState({ languageListType: 'popular' })}
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
