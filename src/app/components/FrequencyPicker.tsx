import * as React from 'react';
import styled from 'styled-components';

import { FrequencyType } from '@/models/Frequency.type';

interface Props {
  frequency: FrequencyType;
  handleSetFrequency: (frequency: FrequencyType) => void;
}

interface State {
  frequency: FrequencyType;
}

const Banner = styled.div`
  background-color: blue;
  height: 40px;
  width: 100%;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
`;

const Label = styled.button`
  background-color: white;
  color: black;
  border: none;
  &:active, &.selected {
    text-decoration: underline;
    outline: none;
  }
  &:hover {
    color: grey;
  }
`;

export class FrequencyPicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleSetFrequency = this.handleSetFrequency.bind(this);
    this.state = {
      frequency: props.frequency,
    };
  }

  public handleSetFrequency(frequency: FrequencyType) {
    this.setState({frequency}, () => this.props.handleSetFrequency(frequency));
  }

  get list() {
    return ['daily', 'weekly', 'monthly', 'yearly'].map((frequency: FrequencyType) => {
      const frequencyTitleCase = frequency.replace(/^\w/, (c) => c.toUpperCase());
      const selectedClass = this.props.frequency === frequency ? 'selected' : null;
      return <ListItem key={frequency}>
        <Label id={`select-${frequency}`} className={selectedClass} onClick={() => this.handleSetFrequency(frequency)}>
          {frequencyTitleCase}
        </Label>
      </ListItem>;
    });
  }

  public render() {
    return (
      <Banner>
        <List id='frequency-list'>
          {this.list}
        </List>
      </Banner>
    );
  }
}
