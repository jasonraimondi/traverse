import * as React from 'react';

import { FrequencyType } from '../../models/Frequency.type';
import './Frequency.pcss';

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
      const selectedClass = this.props.frequency === frequency ? 'selected' : null;
      return <li id={`frequency-${frequency}`} key={frequency}>
        <a id={`select-${frequency}`} className={selectedClass} onClick={() => this.handleSetFrequency(frequency)}>
          {frequencyTitleCase}
        </a>
      </li>;
    });
  }

  public render() {
    return (
      <ul id='frequency-list'>
        {this.list}
      </ul>
    );
  }
}
