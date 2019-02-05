import * as React from 'react';
import { connect, Provider } from 'react-redux';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { About } from '@/renderer/app/About/About';
import Stargazer from '@/renderer/app/Stargazer/Stargazer';
import TrendingRepos from '@/renderer/app/TrendingRepos/TrendingRepos';
import { TitleStuff } from '@/renderer/elements/Title';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import { formatRoute, Routes } from '@/renderer/Routes';
import { SettingsStore } from '@/renderer/store/Settings/Store';

interface Props {
  settings: SettingsStore;
}

interface State {
  firstPage: boolean;
}

class App extends React.Component<Props> {
  state = {
    firstPage: true,
  };

  readonly iconHome = require('@/assets/icons/icon-code.svg');
  readonly iconSettings = require('@/assets/icons/icon-cog.svg');
  readonly iconStarred = require('@/assets/icons/icon-star.svg');
  readonly iconStarredSearch = require('@/assets/icons/icon-search.svg');
  readonly iconStarredSelf = require('@/assets/icons/icon-user-circle.svg');
  readonly iconBack = require('@/assets/icons/icon-arrow-thick-left-circle.svg');

  render() {
    return <>
      <style>{inputStyle}</style>
      <style>{iconStyles}</style>
      <Main>
        <TitleStuff/>
        <RouterOutlet>
          <Switch>
            <Route path={Routes.TRENDING} exact component={TrendingRepos}/>
            <Route path={Routes.STARGAZER} component={Stargazer}/>
            <Route path={Routes.ABOUT} component={About}/>
          </Switch>
        </RouterOutlet>
        <NavigationContainer>
          <Left>
            <a title='Trending Repositories'
               onClick={() => window.history.back()}
               dangerouslySetInnerHTML={{__html: this.iconBack}}
            />
            <NavLink to={formatRoute(Routes.TRENDING)}
                     exact
                     activeClassName='selected'
                     title='Trending Repositories'
                     dangerouslySetInnerHTML={{__html: this.iconHome}}
            />
            <NavLink to={formatRoute(Routes.STARGAZER)}
                     activeClassName='selected'
                     title='Starred'
                     dangerouslySetInnerHTML={{__html: this.iconStarred}}
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
    </>;
  }
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
  grid-template-rows: ${themeConfig.sizes.topbarHeight}px 1fr ${themeConfig.sizes.bottomNavHeight}px;
  overflow-wrap: normal;
  overflow-wrap: break-word;
  color: ${themeConfig.colors.black};
  background-color: ${themeConfig.colors.black};
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
    fill: ${themeConfig.colors.greyDarker};
  }
  svg .secondary {
    fill: ${themeConfig.colors.grey};
  }
  .selected .primary {
    fill: ${themeConfig.colors.greenDarker};
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

function mapStateToProps(state) {
  return {
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {},
    dispatch,
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
