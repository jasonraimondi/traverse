import AddToken from '@/renderer/app/Stargazer/AddToken/AddToken';
import StargazerSearch from '@/renderer/app/Stargazer/StargazerSearch/StargazerSearch';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Router, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import StargazerAvatarList from '@/renderer/app/Stargazer/StargazerList/StargazerAvatarList';
import StargazerShow from '@/renderer/app/Stargazer/StargazerShow/StargazerShow';
import { Icon } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { Main, MainContent, MainSideNav, MainTopbar, MainTopbarLeft } from '@/renderer/elements/Layout';
import { formatRoute, Routes } from '@/renderer/Routes';
import {
  AddUserToStargazerListAction,
  AddUserToStargazerListActionType,
} from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

interface Props {
  location: Router;
  stargazer: StargazerStore;
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
            <Route path={Routes.STARGAZER} component={AddToken}/>
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
