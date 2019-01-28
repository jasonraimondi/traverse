import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { StargazerDetail } from '@/renderer/app/Stargazer/StargazerList/components/StargazerDetail';
import { UserEntity } from '@/renderer/model/User.entity';
import { formatRoute, Routes } from '@/renderer/Routes';
import { SettingsStore } from '@/renderer/store/Settings/Store';
import { ClearCurrentStargazerAction } from '@/renderer/store/Stargazer/actions/ClearCurrentStargazerAction';
import {
  RemoveUserFromStargazerListAction,
  RemoveUserFromStargazerListActionType,
} from '@/renderer/store/Stargazer/actions/RemoveUserFromStargazerListAction';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

interface Props {
  history: any;
  stargazer: StargazerStore;
  settings: SettingsStore;
  ClearCurrentStargazerAction(): void;
  RemoveUserFromStargazerListAction: RemoveUserFromStargazerListActionType;
}

class StargazerList extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.handleSetStargazer = this.handleSetStargazer.bind(this);
    this.handleRemoveStargazer = this.handleRemoveStargazer.bind(this);
    this.clearStargazerWhenNavigatingToList = this.clearStargazerWhenNavigatingToList.bind(this);
  }

  componentDidMount(): void {
    this.clearStargazerWhenNavigatingToList();
  }

  componentDidUpdate(): void {
    this.clearStargazerWhenNavigatingToList();
  }

  clearStargazerWhenNavigatingToList() {
    if (this.props.history.location.pathname === '/stargazer' && this.props.stargazer.currentUserLogin) {
      this.props.ClearCurrentStargazerAction();
    }
  }

  handleSetStargazer(user: UserEntity) {
    const login = user.attributes.login;
    this.props.history.push(formatRoute(Routes.STARGAZER_DETAIL, {login}));
  }

  handleRemoveStargazer(user: UserEntity) {
    this.props.RemoveUserFromStargazerListAction(user.attributes.login);
  }

  get stargazerList() {
    if (!this.props.stargazer.list) {
      return [];
    }

    const userList = Object.values(this.props.stargazer.list).map((stargazer) => stargazer.user);

    if (!userList) {
      return [];
    }

    return userList.map((user) => {
      const isCurrentUser = this.props.settings.github
        && this.props.settings.github.user.login === user.attributes.login;

      return <StargazerDetail key={user.id}
                              isLocked={isCurrentUser}
                              handleClickStargazer={() => this.handleSetStargazer(user)}
                              handleRemoveStargazer={() => this.handleRemoveStargazer(user)}
                              user={user}
      />;
    });
  }

  render() {
    return <>
      <h1>Stargazer List</h1>
      {this.stargazerList.length ? this.stargazerList : 'No stargazers'}
    </>;
  }
}

function mapStateToProps(state) {
  return {
    stargazer: state.stargazer,
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ClearCurrentStargazerAction,
      RemoveUserFromStargazerListAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StargazerList);
