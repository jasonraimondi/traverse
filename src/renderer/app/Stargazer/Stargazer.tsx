import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Router, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import StargazerAvatarList from '@/renderer/app/Stargazer/StargazerList/StargazerAvatarList';
import StargazerList from '@/renderer/app/Stargazer/StargazerList/StargazerList';
import StargazerSearch from '@/renderer/app/Stargazer/StargazerSearch/StargazerSearch';
import StargazerShow from '@/renderer/app/Stargazer/StargazerShow/StargazerShow';
import { Icon } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { Main, MainContent, MainSideNav, MainTopbar } from '@/renderer/elements/Layout';
import { formatRoute, Routes } from '@/renderer/Routes';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

interface Props {
  location: Router;
  stargazer: StargazerStore;
}

class Stargazer extends React.Component<Props> {
  readonly iconAll = require('@/assets/icons/icon-asterisk.svg');
  readonly iconSearch = require('@/assets/icons/icon-search.svg');

  private get showSidebar() {
    return this.props.location.pathname !== Routes.STARGAZER;
  }

  render() {
    return <>
      <Container className={this.showSidebar ? null : 'no-sidebar'}>
        <Topbar>
          <Link to={formatRoute(Routes.STARGAZER)}>
            <Icon title='My Stargazer List' dangerouslySetInnerHTML={{__html: this.iconAll}}/>
          </Link>
          <Link to={formatRoute(Routes.STARGAZER_SEARCH)}>
            <Icon title='Search for User' dangerouslySetInnerHTML={{__html: this.iconSearch}}/>
          </Link>
        </Topbar>
        {this.showSidebar ? (
          <Sidebar>
            <Route path={Routes.STARGAZER_DETAIL} exact component={StargazerAvatarList}/>
          </Sidebar>
        ) : null}
        <Content>
          <Switch>
            <Route path={Routes.STARGAZER_SEARCH} exact component={StargazerSearch}/>
            <Route path={Routes.STARGAZER_DETAIL} exact component={StargazerShow}/>
            <Route path={Routes.STARGAZER} component={StargazerList}/>
          </Switch>
        </Content>
      </Container>
    </>;
  }
}

const Container = styled(Main)`
`;
const Topbar = styled(MainTopbar)`
`;
const Sidebar = styled(MainSideNav)`
`;
const Content = styled(MainContent)`
`;

function mapStateToProps(state) {
  return {
    stargazer: state.stargazer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {},
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Stargazer);
