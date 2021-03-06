import * as React from 'react';
import styled from 'styled-components';

import { FlashMessage, FlashMessageService } from '@/renderer/infrastructure/services/FlashMessage';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

interface State {
  flashMessages: FlashMessage[];
}

interface Props {
  flash: FlashMessageService;
}

export class FlashMessages extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      flashMessages: [],
    };
  }

  get flashMessages() {
    return this.state.flashMessages.map((message, idx) => {
      return <Message key={idx}
                      onClick={() => this.dismiss(message.id)}
                      className={`flash-message ${message.level}`}>
        {message.message}
      </Message>;
    });
  }

  dismiss(id: number): void {
    this.props.flash.remove(id);
  }

  componentDidMount(): void {
    this.props.flash.messageList$.subscribe((messages) => {
      this.setState({
        flashMessages: Object.values(messages),
      });
    });
  }

  render() {
    return <>
      {this.state.flashMessages.length ? (
        <Container>{this.flashMessages}</Container>
      ) : null}
    </>;
  }
}

const Container = styled.div`
    position: absolute;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    height: ${themeConfig.sizes.flashMessageHeight}px;
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
