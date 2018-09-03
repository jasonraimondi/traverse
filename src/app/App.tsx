import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setFrequencyAction } from '../infrastructure/redux/actions/setFrequencyAction';
import './App.pcss';
import { Frequency } from './components/Frequency';

interface IProps {
  frequency: string;
}

class App extends React.Component<IProps> {
  public render() {
    return (
      <div id='app-container'>
        <div id='app-viewport'>
          Repository List
        </div>
        <div id='app-bottombar'>
          <Frequency selected={this.props.frequency}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    frequency: state.selected,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setSelectedFrequency: setFrequencyAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
