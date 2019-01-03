import { theme } from '@/infrastructure/styles/theme';
import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { HashRouter as Router, Link, Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import About from '@/app/About/About';
import Settings from '@/app/Settings/Settings';
import { TitleBar } from '@/app/TitleBar';
import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import TrendingRepos from '@/app/TrendingRepos/TrendingRepos';
import { FrequencyType } from '@/models/Frequency.type';

interface Props {
  frequency: FrequencyType;
  language: ILanguage;
}

class App extends React.Component<Props> {
  render() {
    return (
      <Router>
        <Main>
          <TitleContainer>
            <TitleBar frequency={this.props.frequency} language={this.props.language}/>
          </TitleContainer>
          <RouterOutlet>
            <Switch>
              <Route path='/' exact component={TrendingRepos}/>
              <Route path='/about' component={About}/>
              <Route path='/settings' component={Settings}/>
            </Switch>
          </RouterOutlet>
          <NavigationContainer>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            {/*<Link to='/settings'>Settings</Link>*/}
          </NavigationContainer>
        </Main>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    frequency: state.frequency,
  };
}

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 0;
  grid-template-areas:
    "title"
    "content"
    "bottom-nav";
  grid-template-rows: 43px 1fr 40px;
  overflow-wrap: normal;
  overflow-wrap: break-word;
`;

const TitleContainer = styled.div`
  grid-area: title;
  -webkit-app-region: drag;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
`;

const RouterOutlet = styled.div`
  overflow-y: auto;
  grid-area: content;
  background-color: ${theme.colors.white};
  overflow-wrap: normal;
  overflow-wrap: break-word;
`;

const NavigationContainer = styled.div`
  grid-area: bottom-nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  & a {
    color: ${theme.colors.white};
  }
`;

export default connect(mapStateToProps)(App);
