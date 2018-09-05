import * as React from 'react';

import { SetFrequencyActionType } from '../../infrastructure/redux/actions/SetFrequency.action';
import { FrequencyType } from '../../models/Frequency.type';

interface IProps {
  frequency: FrequencyType;
  handleSetFrequency: (frequency: FrequencyType) => void;
}

interface IState {
  frequency: FrequencyType;
}

export class Frequency extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleSetFrequency = this.handleSetFrequency.bind(this);
    this.state = {
      frequency: props.frequency,
    };
  }

  public handleSetFrequency(frequency: FrequencyType) {
    this.setState({ frequency }, () => this.props.handleSetFrequency(frequency));
  }

  public render() {
    return (
      <ul id='frequency-list'>
        <li><p id='selected-frequency'>Frequency: {this.state.frequency}</p></li>
        <li>
          <a id='select-daily' onClick={() => this.handleSetFrequency('daily')}>Daily</a>
        </li>
        <li>
          <a id='select-weekly' onClick={() => this.handleSetFrequency('weekly')}>Weekly</a>
        </li>
        <li>
          <a id='select-monthly' onClick={() => this.handleSetFrequency('monthly')}>Monthly</a>
        </li>
      </ul>
    );
  }
}
