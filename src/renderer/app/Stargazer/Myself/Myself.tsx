import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Router, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { UserStarredRepositoryList } from '@/renderer/elements/UserStarredRepositoryList';
import { formatRoute, Routes } from '@/renderer/Routes';
import { SettingsStore } from '@/renderer/store/Settings/Store';
import {
  FetchUserStarredRepositoryListAction,
  FetchUserStarredRepositoryListActionType,
} from '@/renderer/store/Stargazer/actions/FetchUserStarredRepositoryListAction';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

interface Props {
  history: Router;
  settings: SettingsStore;
  stargazer: StargazerStore;
  FetchUserStarredRepositoryListAction: FetchUserStarredRepositoryListActionType;
}

class Myself extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleStargazerClick = this.handleStargazerClick.bind(this);
  }

  handleStargazerClick(login: string) {
    this.props.FetchUserStarredRepositoryListAction(login);
    this.props.history.push(formatRoute(Routes.STARGAZER_DETAIL, {login}));
  }

  private get user() {
    if (this.props.settings.github
      && this.props.settings.github.user
      && this.props.settings.github.user.user) {
      return this.props.settings.github.user.user;
    }
    return false;
  }

  private get login() {
    return this.user && this.user.attributes.login ? this.user.attributes.login : false;
  }

  private get repositoryList() {
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
      <UserStarredRepositoryList
        handleStargazerClick={this.handleStargazerClick}
        isLoading={this.props.stargazer.loading}
        user={this.user}
        repositoryList={this.repositoryList}
        FetchUserStarredRepositoryListAction={this.props.FetchUserStarredRepositoryListAction}
      />
    </>;
  }
}

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Myself));
