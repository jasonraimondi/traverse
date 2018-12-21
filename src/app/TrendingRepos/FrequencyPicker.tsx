import * as React from 'react';
import styled from 'styled-components';

import { UnstyledList } from '@/app/elements/base';
import { FrequencyType } from '@/models/Frequency.type';

interface Props {
  frequency: FrequencyType;
  handleSetFrequency: (frequency: FrequencyType) => void;
}

interface State {
  frequency: FrequencyType;
}

const List = styled(UnstyledList)`
  display: flex;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const ListItem = styled.li`
`;

const Label = styled.button`
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
    this.setState({ frequency }, () => this.props.handleSetFrequency(frequency));
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
      <List id='frequency-list'>
        {this.list}
      </List>
    );
  }
}
