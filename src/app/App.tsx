import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SetFrequencyAction, SetFrequencyActionType } from '../infrastructure/redux/actions/SetFrequency.action';
import './App.pcss';
import { FrequencyType } from '../models/Frequency.type';
import { Frequency } from './components/Frequency';

interface IProps {
  frequency: FrequencyType;
  setFrequencyAction: SetFrequencyActionType;
}

class App extends React.Component<IProps> {
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
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
