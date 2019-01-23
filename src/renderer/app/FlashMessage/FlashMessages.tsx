import * as React from 'react';
import styled from 'styled-components';

import { flashMessage, FlashMessage } from '@/renderer/app/FlashMessage/FlashMessage';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

interface State {
  flashMessages: FlashMessage[];
}

export class FlashMessages extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      flashMessages: [],
    };
  }

  get flashMessages() {
    return this.state.flashMessages.map((message, idx) => {
      return <Message key={idx} className={`flash-message ${message.level}`}>{message.message}</Message>;
    });
  }

  componentDidMount(): void {
    flashMessage.messageList$.subscribe((messages) => {
      this.setState({
        flashMessages: Object.values(messages),
      });
    });
  }

  render() {
    return <>
      <style>{animationStyle}</style>
      {this.state.flashMessages.length ? (
        <Container>{this.flashMessages}</Container>
      ) : null}
    </>;
  }
}

const animationStyle = `
    @-webkit-keyframes slideDown {
        0%, 100% { -webkit-transform: translateY(-50px); }
        10%, 90% { -webkit-transform: translateY(0px); }
    }
    @-moz-keyframes slideDown {
        0%, 100% { -moz-transform: translateY(-50px); }
        10%, 90% { -moz-transform: translateY(0px); }
    }
`;

const Container = styled.div`
    position: absolute;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    height: ${themeConfig.sizes.topbarHeight};
    text-align: center;
`;

const Message = styled.p`
  background-color: ${themeConfig.colors.grey};
  color: ${themeConfig.colors.white};
  margin: 0;
  padding: 0.65rem 2rem;
  font-weight: 500;
  font-size: 0.7rem;
  &.success {
    background-color: ${themeConfig.colors.green};
  }
  &.info {
    background-color: ${themeConfig.colors.purple};
  }
  &.error {
    background-color: ${themeConfig.colors.red};
  }
`;
