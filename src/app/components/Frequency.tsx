import * as React from 'react';

import './App.pcss';

interface IProps {
  selected: string;
}

export class Frequency extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <ul id='frequency-list'>
        <li><p id='selected'>Frequency: {this.props.selected}</p></li>
        <li>Daily</li>
        <li>Weekly</li>
        <li>Monthly</li>
      </ul>
    );
  }
}
