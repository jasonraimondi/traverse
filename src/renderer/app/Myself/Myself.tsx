import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { RepositoryList } from '@/renderer/elements/RepositoryList';
import { UserProfile } from '@/renderer/elements/UserProfile';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import { formatRoute, Routes } from '@/renderer/Routes';
import { SettingsStore } from '@/renderer/store/Settings/Store';
import {
  FetchUserStarredRepositoryListAction,
  FetchUserStarredRepositoryListActionType,
} from '@/renderer/store/Stargazer/actions/FetchUserStarredRepositoryListAction';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';
import styled from 'styled-components';

interface Props {
  settings: SettingsStore;
  stargazer: StargazerStore;
  FetchUserStarredRepositoryListAction: FetchUserStarredRepositoryListActionType;
}

class Myself extends React.Component<Props> {
  get user() {
    if (this.props.settings.github
      && this.props.settings.github.user
      && this.props.settings.github.user.user) {
      return this.props.settings.github.user.user;
    }
    return false;
  }

  get login() {
    return this.user && this.user.attributes.login ? this.user.attributes.login : false;
  }

  componentDidMount(): void {
    if (this.login) {
      this.props.FetchUserStarredRepositoryListAction(this.login);
    }
  }

  get repositoryList() {
    if (
      this.login
      && this.props.stargazer.repositoryList[this.login]
      && this.props.stargazer.repositoryList[this.login].data.stargazerRepositoryList
    ) {
      return this.props.stargazer.repositoryList[this.login].data.stargazerRepositoryList;
    }

    return [];
  }

  render() {
    if (!this.user) {
      return <Redirect to={formatRoute(Routes.STARGAZER)}/>;
    }

    return <>
      <UserContainer>
        <UserProfile user={this.user}/>
      </UserContainer>
      <RepositoryContainer>
        <RepositoryList
          loading={this.props.stargazer.loading}
          repositoryList={this.repositoryList}
        />
      </RepositoryContainer>
    </>;
  }
}

const UserContainer = styled.div`
  width: 100%;
  background-color: ${themeConfig.colors['grey-lightest']}
`;

const RepositoryContainer = styled.div`
  width: 100%;
  background-color: ${themeConfig.colors['grey-lightest']}
  & ul {
    background-color: ${themeConfig.colors['grey-lightest']}
    border-top: 1px solid ${themeConfig.colors.black};
  }
`;

function mapStateToProps(state) {
  return {
    settings: state.settings,
    stargazer: state.stargazer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      FetchUserStarredRepositoryListAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Myself);
