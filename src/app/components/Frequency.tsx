import * as React from 'react';
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

  get list() {
    return ['daily', 'weekly', 'monthly', 'yearly'].map((frequency: FrequencyType) => {
      const frequencyTitleCase = frequency.replace(/^\w/, (c) => c.toUpperCase());
      return <li key={frequency}>
        <a id={`select-${frequency}`} onClick={() => this.handleSetFrequency(frequency)}>
          {frequencyTitleCase}
        </a>
      </li>;
    });
  }

  public render() {
    return (
      <ul id='frequency-list'>
        <li><p id='selected-frequency'>Frequency: {this.state.frequency}</p></li>
        {this.list}
      </ul>
    );
  }
}
