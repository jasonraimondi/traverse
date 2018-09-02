import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setFrequencyAction } from '../infrastructure/redux/actions/setFrequencyAction';
import './App.pcss';

interface IProps {
  frequency: string;
}

class Frequency extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <p id='frequency'>Frequency: {this.props.frequency}</p>
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
      setSelectedFrequency: setFrequencyAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Frequency);
