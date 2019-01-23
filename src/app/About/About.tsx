import { remote } from 'electron';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Donation } from '@/app/About/components/Donation';
import { Title } from '@/app/elements/Base';
import { themeConfig } from '@/infrastructure/styles/Theme';

export class About extends React.Component {
  render() {
    return <>
      <Title>About</Title>
      <AboutContainer>
        <Main>
          <TraverseTitle id='traverse-title'>
            <Icon src='../resources/icon.png' alt='Traverse Icon'/>
            Traverse
            <br/>
            <OpenSource href='https://github.com/jasonraimondi/traverse' className='open-link-externally'>
              Traverse is Open Source
            </OpenSource>
            <Version>v{remote && remote.app ? remote.app.getVersion() : 'DEV'}</Version>
          </TraverseTitle>
          <DonateTitle>Beer Me</DonateTitle>
          <Donation walletType='Ether' address='0x13EcA749be300C1951bD6E9d86bB395e2734BE20'/>
          <Donation walletType='Nano' address='xrb_3ii5t9x8a7or17zkf6syp7ntprd77z7tx9migsghb9rx5ymiop76kyrahef8'/>
        </Main>
        <Copyright className='copyright'>
          Copyright © 2019
          &nbsp;
          <a href='https://jasonraimondi.com' className='open-link-externally'>Jason Raimondi</a>,
          &nbsp;
          Digital Canvas Design LLC
        </Copyright>
      </AboutContainer>
    </>;
  }
}
const OpenSource = styled.a`
  padding: 0.5rem 0 0.35rem;
  font-size: 0.7rem;
  color: ${themeConfig.colors.purple};
`;

const Icon = styled.img`
    width: 175px;
    height: 175px;
`;

const DonateTitle = styled.p`
    font-size: 0.8rem;
    font-weight: 600;
`;

const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
`;

const TraverseTitle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Version = styled.span`
    font-size: 0.85rem;
    color: ${themeConfig.colors.grey}
`;

const Copyright = styled.h4`
   font-weight: 400;
   font-size: 0.45rem;
   & a {
     color: ${themeConfig.colors.purple}
   }
   & a:hover, a:active {
    color: ${themeConfig.colors['purple-dark']}
   }
`;
