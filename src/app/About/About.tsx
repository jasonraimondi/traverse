import { remote } from 'electron';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '@/infrastructure/styles/theme';

class About extends React.Component {
  render() {
    return <>
      <AboutContainer>
        <TraverseTitle>
          Traverse
          <br/>
          <Version>v{remote.app.getVersion()}</Version>
        </TraverseTitle>
        <Copyright>Copyright © 2019 Jason Raimondi, Digital Canvas Design LLC</Copyright>
      </AboutContainer>
    </>;
  }
}

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
`;

const TraverseTitle = styled.h2`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Version = styled.span`
    font-size: 0.85rem;
    color: ${theme.colors.grey}
`;

const Copyright = styled.h4`
   font-weight: 400;
   font-size: 0.45rem;
`;
export default withRouter(About);
