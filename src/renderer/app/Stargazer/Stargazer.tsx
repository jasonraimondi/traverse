import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Router, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Myself from '@/renderer/app/Stargazer/Myself/Myself';
import NotLoggedIn from '@/renderer/app/Stargazer/Myself/NotLoggedIn';
import StargazerAvatarList from '@/renderer/app/Stargazer/StargazerAvatarList/StargazerAvatarList';
import StargazerSearch from '@/renderer/app/Stargazer/StargazerSearch/StargazerSearch';
import StargazerShow from '@/renderer/app/Stargazer/StargazerShow/StargazerShow';
import { Icon } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { Main, MainContent, MainSideNav, MainTopbar, MainTopbarLeft } from '@/renderer/elements/Layout';
import { formatRoute, Routes } from '@/renderer/Routes';
import { SettingsStore } from '@/renderer/store/Settings/Store';
import {
  AddUserToStargazerListAction,
  AddUserToStargazerListActionType,
} from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

interface Props {
  location: Router;
  stargazer: StargazerStore;
  settings: SettingsStore;
  AddUserToStargazerListAction: AddUserToStargazerListActionType;
}

class Stargazer extends React.Component<Props> {
  readonly iconAll = require('@/assets/icons/icon-asterisk.svg');
  readonly iconSearch = require('@/assets/icons/icon-search.svg');

  componentDidMount(): void {
    if (Object.keys(this.props.stargazer.stargazerList).length === 0) {
      this.props.AddUserToStargazerListAction('jasonraimondi');
    }
  }

  get authUser() {
    return this.props.settings.github && this.props.settings.github.user ? this.props.settings.github.user : false;
  }

  render() {
    return <>
      <Container>
        <Topbar>
          <Left>
            <Link to={formatRoute(Routes.STARGAZER)}>
              <Icon title='My Stargazer List' dangerouslySetInnerHTML={{__html: this.iconAll}}/>
            </Link>
            <Link to={formatRoute(Routes.STARGAZER_SEARCH)}>
              <Icon title='Search for User' dangerouslySetInnerHTML={{__html: this.iconSearch}}/>
            </Link>
          </Left>
        </Topbar>
        <Sidebar>
          <StargazerAvatarList />
        </Sidebar>
        <Content>
          <Switch>
            <Route path={Routes.STARGAZER_SEARCH} exact component={StargazerSearch}/>
            <Route path={Routes.STARGAZER_DETAIL} exact component={StargazerShow}/>
            {this.authUser ? (
              <Route path={Routes.STARGAZER} component={Myself}/>
            ) : (
              <Route path={Routes.STARGAZER} component={NotLoggedIn}/>
            )}
          </Switch>
        </Content>
      </Container>
    </>;
  }
}

const Container = styled(Main)`
`;
const Topbar = styled(MainTopbar)`
  justify-content: flex-start;
  padding: 0 1rem;
`;
const Left = styled(MainTopbarLeft)``;
const Sidebar = styled(MainSideNav)`
`;
const Content = styled(MainContent)`
`;

function mapStateToProps(state) {
  return {
    stargazer: state.stargazer,
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      AddUserToStargazerListAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Stargazer);
