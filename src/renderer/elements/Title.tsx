import { About } from '@/renderer/app/About/About';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import { Routes } from '@/renderer/Routes';

export const TitleStuff = () => <TitleContainer>
  <TitleHoverGrabber className='hover-to-move'>
    <TitleText>
        <Route path={Routes.TRENDING} exact component={() => 'Trending Repos'}/>
        <Route path={Routes.STARGAZER} component={() => 'Stargazer'}/>
        <Route path={Routes.SETTINGS} component={() => 'Settings'}/>
        <Route path={Routes.ABOUT} component={() => 'About'}/>
        <Route path={Routes.MYSELF} exact component={() => 'Myself'}/>
    </TitleText>
  </TitleHoverGrabber>
</TitleContainer>;

const TitleContainer = styled.div`
  grid-area: title;
  z-index: 10;
  height: ${themeConfig.sizes.topbarHeight}px;
  background-color: ${themeConfig.colors.purple};
  &:hover .hover-to-move {
    background-color: ${themeConfig.colors.purpleDark};
  }
`;

const TitleHoverGrabber = styled.div`
  display: block;
  -webkit-app-region: drag;
  height: ${themeConfig.sizes.topbarHeight}px;
  width: 100%;
  transition: background-color 0.1s;
  text-align: center;
`;

const TitleText = styled.span`
  color: ${themeConfig.colors.white};
  position: relative;
  top: 2px;
  font-size: 0.9rem;
`;
