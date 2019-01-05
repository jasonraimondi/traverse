import * as React from 'react';
import styled from 'styled-components';

import { theme } from '@/infrastructure/styles/theme';

interface RollDiceProps {
  onClickRoll: () => void;
}

interface State {
  activeDiceKey: number;
}

export class DieRoller extends React.Component<RollDiceProps, State> {

  private readonly dice: string[] = [
    require('@/assets/icons/dice/dice-1.svg'),
    require('@/assets/icons/dice/dice-2.svg'),
    require('@/assets/icons/dice/dice-3.svg'),
    require('@/assets/icons/dice/dice-4.svg'),
    require('@/assets/icons/dice/dice-5.svg'),
    require('@/assets/icons/dice/dice-6.svg'),
  ];

  constructor(props) {
    super(props);
    this.rollDice = this.rollDice.bind(this);
    this.onClickRoll = this.onClickRoll.bind(this);
    this.state = {
      activeDiceKey: this.rollDice(true),
    };
  }

  rollDice(isFirstRoll = false): number {
    let num = Math.floor(Math.random() * this.dice.length);

    if (isFirstRoll && num === 0) {
      // if number is 0 on the first roll, (showing dice count 1), add a random number to it so it is not 1
      num += Math.floor(Math.random() * 5) + 1;
    }
    return num;
  }

  onClickRoll() {
    this.setState({ activeDiceKey: this.rollDice() });
    this.props.onClickRoll();
  }

  render() {
    const diceIcon = this.dice[this.state.activeDiceKey];
    return <DiceIcon
      title='Roll the Dice, Get a Random Language'
      onClick={this.onClickRoll}
      dangerouslySetInnerHTML={{ __html: diceIcon }}
    />;
  }
}

const DiceIcon = styled.a`
  margin-right: 0.5rem;
  & svg {
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${theme.colors.white};
    border-radius: 999px;
    padding: 0.1rem;
  }
  & svg #primary {
    fill: ${theme.colors['grey-darker']};
  }
  & svg #secondary,
  & svg #secondary path {
    fill: ${theme.colors.grey};
  }
`;
