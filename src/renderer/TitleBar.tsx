import * as React from 'react';
import styled from 'styled-components';

import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

interface Props {
  title: JSX.Element;
}

const Title = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeConfig.colors.black};
  color: ${themeConfig.colors.white};
`;

export class TitleBar extends React.Component<Props> {
  render() {
    return <Title className='title-bar'>
      {this.props.title}
    </Title>;
  }
}
