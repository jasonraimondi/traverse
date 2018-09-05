import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  FetchRepositoryListAction,
  FetchRepositoryListActionType,
} from '../infrastructure/redux/actions/FetchRepositoryList.action';

import { SetFrequencyAction, SetFrequencyActionType } from '../infrastructure/redux/actions/SetFrequency.action';
import { FrequencyType } from '../models/Frequency.type';
import './App.pcss';
import { Frequency } from './components/Frequency';
import { RepositoryList } from './components/RepositoryList';

interface IProps {
  repositoryList: any;
  frequency: FrequencyType;
  setFrequencyAction: SetFrequencyActionType;
  fetchRepositoryListAction: FetchRepositoryListActionType;
}

class App extends React.Component<IProps> {
  constructor(props) {
    super(props);
    this.handleSetFrequency = this.handleSetFrequency.bind(this);
  }

  public componentDidMount() {
    this.props.fetchRepositoryListAction({
      language: 'typescript',
      frequency: 'daily',
    });
  }

  public handleSetFrequency(frequency: FrequencyType) {
    this.props.setFrequencyAction(frequency);
    this.props.fetchRepositoryListAction({
      language: 'typescript',
      frequency,
    });
  }

  public render() {
    return (
      <div id='app-container'>
        <div id='app-viewport'>
          <RepositoryList list={this.props.repositoryList}/>
        </div>
        <div id='app-bottombar'>
          <Frequency frequency={this.props.frequency} handleSetFrequency={this.handleSetFrequency}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    frequency: state.frequency,
    repositoryList: state.repositoryList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setFrequencyAction: SetFrequencyAction,
      fetchRepositoryListAction: FetchRepositoryListAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
