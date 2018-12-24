import * as React from 'react';
import styled from 'styled-components';

import { Icon } from '@/app/TrendingRepos/LanguageListPicker';

interface RollDiceProps {
  onClickRoll: () => void;
}

export class DieRoller extends React.Component<RollDiceProps> {
  private activeDiceKey: number;

  private readonly dice: string[] = [
    require('@/icons/dice-1.svg'),
    require('@/icons/dice-2.svg'),
    require('@/icons/dice-3.svg'),
    require('@/icons/dice-4.svg'),
    require('@/icons/dice-5.svg'),
    require('@/icons/dice-6.svg'),
  ];

  constructor(props) {
    super(props);
    this.rollDice = this.rollDice.bind(this);
    this.onClickRoll = this.onClickRoll.bind(this);

    this.rollDice(true);
  }

  rollDice(isFirstRoll = false): void {
    let num = Math.floor(Math.random() * this.dice.length);

    if (isFirstRoll && num === 0) {
      // if number is 0 on the first roll, (showing dice count 1), add a random number to it so it is not 1
      num += Math.floor(Math.random() * 5) + 1;
    }
    this.activeDiceKey = num;
  }

  get diceIcon(): string {
    return this.dice[this.activeDiceKey];
  }

  onClickRoll() {
    this.rollDice();
    this.props.onClickRoll();
  }

  render() {
    return (
      <Dice
        onClick={this.onClickRoll}
        dangerouslySetInnerHTML={{ __html: this.diceIcon }}
      />
    );
  }
}

const Dice = styled.div`
  height: 25px;
  width: 25px;
  margin: 10px;
`;
