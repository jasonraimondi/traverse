import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  FetchRepositoryListAction,
  FetchRepositoryListActionType,
} from '../infrastructure/redux/actions/FetchRepositoryList.action';

import { SetFrequencyAction, SetFrequencyActionType } from '../infrastructure/redux/actions/SetFrequency.action';
import { SetLanguageAction, SetLanguageActionType } from '../infrastructure/redux/actions/SetLanguage.action';
import { FrequencyType } from '../models/Frequency.type';
import './App.pcss';
import { Frequency } from './components/Frequency';
import { LanguageList } from './components/LanguageList';
import { RepositoryList } from './components/RepositoryList';

interface IProps {
  repositoryList: any;
  frequency: FrequencyType;
  language: string;
  SetLanguageAction: SetLanguageActionType;
  SetFrequencyAction: SetFrequencyActionType;
  FetchRepositoryListAction: FetchRepositoryListActionType;
}

class App extends React.Component<IProps> {
  private readonly ALL_LANGUAGES = require('../infrastructure/data/all-languages.json');

  constructor(props) {
    super(props);
    this.handleSetFrequency = this.handleSetFrequency.bind(this);
    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  public componentDidMount() {
    this.props.FetchRepositoryListAction({
      language: this.props.language,
      frequency: this.props.frequency,
    });
  }

  public handleSetFrequency(frequency: FrequencyType) {
    this.props.SetFrequencyAction(frequency);
    this.props.FetchRepositoryListAction({
      language: this.props.language,
      frequency,
    });
  }

  public handleSetLanguage(language: string) {
    this.props.SetLanguageAction(language);
    this.props.FetchRepositoryListAction({
      language,
      frequency: this.props.frequency,
    });
  }

  public render() {
    return (
      <main id='app-container'>
        <div id='app-content'>
          <RepositoryList repositoryList={this.props.repositoryList}/>
        </div>
        <div id='app-bottombar'>
          <Frequency frequency={this.props.frequency} handleSetFrequency={this.handleSetFrequency}/>
          <LanguageList
            selectedLanguage={'typescript'}
            languageList={this.ALL_LANGUAGES}
            handleSetLanguage={this.handleSetLanguage}
          />
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    frequency: state.frequency,
    repositoryList: state.repositoryList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SetLanguageAction,
      SetFrequencyAction,
      FetchRepositoryListAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
