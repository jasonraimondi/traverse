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

interface IProps {
  frequency: FrequencyType;
  setFrequencyAction: SetFrequencyActionType;
  fetchRepositoryListAction: FetchRepositoryListActionType;
}

class App extends React.Component<IProps> {
  public componentDidMount() {
    this.props.fetchRepositoryListAction({
      language: 'typescript',
      frequency: 'daily',
    });
  }
  public render() {
    return (
      <div id='app-container'>
        <div id='app-viewport'>
          Repository List
        </div>
        <div id='app-bottombar'>
          <Frequency frequency={this.props.frequency} handleSetFrequency={this.props.setFrequencyAction}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    frequency: state.frequency,
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