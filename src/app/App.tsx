import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { HashRouter as Router, NavLink, Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import About from '@/app/About/About';
import Settings from '@/app/Settings/Settings';
import Starred from '@/app/Starred/Starred';
import { TitleBar } from '@/app/TitleBar';
import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import TrendingRepos from '@/app/TrendingRepos/TrendingRepos';
import { themeConfig } from '@/infrastructure/styles/Theme';

import { FrequencyType } from '@/models/Frequency.type';

interface Props {
  frequency: FrequencyType;
  language: ILanguage;
}

class App extends React.Component<Props> {
  readonly homeIcon = require('@/infrastructure/assets/icons/icon-code.svg');
  readonly settingsIcon = require('@/infrastructure/assets/icons/icon-cog.svg');
  readonly starredIcon = require('@/infrastructure/assets/icons/icon-star.svg');

  render() {
    return <>
      <style>{inputStyle}</style>
      <style>{iconStyles}</style>
      <Router>
        <Main>
          <TitleContainer>
            <TitleBar frequency={this.props.frequency} language={this.props.language}/>
          </TitleContainer>
          <RouterOutlet>
            <Switch>
              <Route path='/starred' exact component={TrendingRepos}/>
              <Route path='/' component={Starred}/>
              <Route path='/settings' component={Settings}/>
              <Route path='/about' component={About}/>
            </Switch>
          </RouterOutlet>
          <NavigationContainer>
            <Left>
              <NavLink to='/'
                       exact
                       activeClassName='selected'
                       title='Trending Repositories'
                       dangerouslySetInnerHTML={{__html: this.homeIcon}}
              />
              <NavLink to='/starred'
                       exact
                       activeClassName='selected'
                       title='Starred'
                       dangerouslySetInnerHTML={{__html: this.starredIcon}}
              />
              <NavLink to='/settings'
                       exact
                       activeClassName='selected'
                       title='Settings'
                       dangerouslySetInnerHTML={{__html: this.settingsIcon}}
              />
            </Left>
            <Right>
              <NavLink to='/about'
                       exact
                       title='About Page'
                       activeClassName='selected'
              >About</NavLink>
            </Right>
          </NavigationContainer>
        </Main>
      </Router>
    </>;
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
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
  color: ${themeConfig.colors.black};
  background-color: ${themeConfig.colors.black};
`;

const TitleContainer = styled.div`
  grid-area: title;
  -webkit-app-region: drag;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${themeConfig.colors.black};
`;

const RouterOutlet = styled.div`
  overflow-y: auto;
  grid-area: content;
  background-color: ${themeConfig.colors.white};
  overflow-wrap: normal;
  overflow-wrap: break-word;
`;

const NavigationContainer = styled.div`
  grid-area: bottom-nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.15rem 1rem 0;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  & a {
    color: ${themeConfig.colors.white};
  }
  & a:hover {
    text-decoration: none;
  }
  & a.selected {
    text-decoration: underline;
  }
`;

const Right = styled.div`
`;

const Left = styled.div`
  flex: 1;
  > a {
    margin-right: 0.75rem;
  }
`;

const iconStyles = `
  svg {
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${themeConfig.colors.white};
    border-radius: 999px;
    padding: 0.1rem;
  }
  svg .primary {
    fill: ${themeConfig.colors['grey-darker']};
  }
  svg .secondary {
    fill: ${themeConfig.colors.grey};
  }
  .selected .primary {
    fill: ${themeConfig.colors['green-darker']};
  }
  .selected .secondary {
    fill: ${themeConfig.colors.green};
  }
`;

const inputStyle = `
  #githubAccessToken {
    display: block;
    font-size: 1rem;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 3px;
    min-width: 350px;
    max-width: 450px;
    width: 100%;
    padding: 0.25rem 0.5rem 0.35rem;
    margin-top: 0.5rem;
    border: 1px solid ${themeConfig.colors.purple};
    &:disabled,
    &[disabled] {
      border-color: ${themeConfig.colors.grey};
    }
  }
`;

export default connect(mapStateToProps)(App);
