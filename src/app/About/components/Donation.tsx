import { clipboard } from 'electron';
import * as React from 'react';
import styled from 'styled-components';

import { theme } from '@/infrastructure/styles/Theme';

interface Props {
  walletType: string;
  address: string;
}

interface State {
  wasCopied: boolean;
}

export class Donation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      wasCopied: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  private onClick() {
    clipboard.writeText(this.props.address);
    this.setState({ wasCopied: true });
    setTimeout(() => this.setState({ wasCopied: false }), 3000);
  }

  render() {
    return <DonationAddress>
      <span className='wallet-type'>{this.props.walletType}</span>
      <Copied>{this.state.wasCopied ? '(Copied to Clipboard)' : null}</Copied>
      <br/>
      <a onClick={this.onClick} className={'donation-address'}>
        <code>{this.props.address}</code>
      </a>
    </DonationAddress>;
  }
}

const Copied = styled.span`
    position: absolute;
    font-size: 0.5rem;
    margin-left: 10px;
    color: ${theme.colors.green};
`;

const DonationAddress = styled.p`
    color: ${theme.colors.grey};
    font-size: 0.6rem;
    font-weight: 600;
    & code {
      color: ${theme.colors.purple};
    }
    & a:hover {
      cursor: pointer;
    }
`;
