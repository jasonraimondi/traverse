import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { HashRouter as Router, NavLink, Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import About from '@/app/About/About';
import { formatRoute, Routes } from '@/app/Routes';
import Settings from '@/app/Settings/Settings';
import Stargazer from '@/app/Stargazer/Stargazer';
import { ILanguage } from '@/app/TrendingRepos/components/LanguageList';
import TrendingRepos from '@/app/TrendingRepos/TrendingRepos';
import { themeConfig } from '@/infrastructure/styles/Theme';
import { FrequencyType } from '@/models/Frequency.type';

interface Props {
  history: any;
  frequency: FrequencyType;
  language: ILanguage;
}

class App extends React.Component<Props> {
  readonly iconHome = require('@/infrastructure/assets/icons/icon-code.svg');
  readonly iconSettings = require('@/infrastructure/assets/icons/icon-cog.svg');
  readonly iconStarred = require('@/infrastructure/assets/icons/icon-star.svg');
  readonly iconStarredSearch = require('@/infrastructure/assets/icons/icon-search.svg');

  render() {
    return <>
      <style>{inputStyle}</style>
      <style>{iconStyles}</style>
      <Router>
        <Main>
          <TitleContainer />
          <RouterOutlet>
            <Switch>
              <Route path={Routes.TRENDING} exact component={TrendingRepos}/>
              <Route path={Routes.STARGAZER} component={Stargazer}/>
              <Route path={Routes.SETTINGS} component={Settings}/>
              <Route path={Routes.ABOUT} component={About}/>
            </Switch>
          </RouterOutlet>
          <NavigationContainer>
            <Left>
              <NavLink to={formatRoute(Routes.TRENDING)}
                       exact
                       activeClassName='selected'
                       title='Trending Repositories'
                       dangerouslySetInnerHTML={{__html: this.iconHome}}
              />
              {/*<NavLink to={formatRoute(Routes.STARGAZER)}*/}
                       {/*activeClassName='selected'*/}
                       {/*title='Starred'*/}
                       {/*dangerouslySetInnerHTML={{__html: this.iconStarred}}*/}
              {/*/>*/}
              {/*<NavLink to={formatRoute(Routes.STARGAZER_SEARCH)}*/}
                       {/*activeClassName='selected'*/}
                       {/*title='Starred Search'*/}
                       {/*className='small'*/}
                       {/*dangerouslySetInnerHTML={{__html: this.iconStarredSearch}}*/}
              {/*/>*/}
              <NavLink to={formatRoute(Routes.SETTINGS)}
                       exact
                       activeClassName='selected'
                       title='Settings'
                       dangerouslySetInnerHTML={{__html: this.iconSettings}}
              />
            </Left>
            <Right>
              <NavLink to={formatRoute(Routes.ABOUT)}
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
  grid-template-rows: ${themeConfig.sizes.topbarHeight} 1fr ${themeConfig.sizes.bottomNavHeight};
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
  display: flex;
  align-items: center;
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
  .small svg {
    width: 1.25rem;
    height: 1.25rem;
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
