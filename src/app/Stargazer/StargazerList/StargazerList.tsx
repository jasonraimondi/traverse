import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { formatRoute, Routes } from '@/app/Routes';
import { StargazerDetail } from '@/app/Stargazer/StargazerList/components/StargazerDetail';
import StargazerRepositoryList from '@/app/Stargazer/StargazerList/StargazerRepositoryList/StargazerRepositoryList';
import { ClearCurrentStargazerAction } from '@/infrastructure/redux/Stargazer/actions/ClearCurrentStargazerAction';
import {
  RemoveUserFromStargazerListAction,
  RemoveUserFromStargazerListActionType,
} from '@/infrastructure/redux/Stargazer/actions/RemoveUserFromStargazerListAction';
import {
  SetCurrentStargazerAction,
  SetCurrentStargazerActionType,
} from '@/infrastructure/redux/Stargazer/actions/SetCurrentStargazerAction';
import { StargazerStore } from '@/infrastructure/redux/Stargazer/Store';
import { UserEntity } from '@/models/User.entity';
import { bindActionCreators } from 'redux';

interface Props {
  history: any;
  stargazer: StargazerStore;
  SetCurrentStargazerAction: SetCurrentStargazerActionType;
  ClearCurrentStargazerAction: () => void;
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
    this.props.SetCurrentStargazerAction(login);
    this.props.history.push(formatRoute(Routes.STARGAZER_DETAIL, {login}));
  }

  handleRemoveStargazer(user: UserEntity) {
    this.props.RemoveUserFromStargazerListAction(user.attributes.login);
  }

  get stargazerList() {
    return Object.values(this.props.stargazer.userList)
      .map(
        (user) => <StargazerDetail key={user.id}
                                   handleClickStargazer={() => this.handleSetStargazer(user)}
                                   handleRemoveStargazer={() => this.handleRemoveStargazer(user)}
                                   user={user}
        />,
      );
  }

  render() {
    return <>
      {this.stargazerList.length ? this.stargazerList : 'No stargazers'}
      <Route path={Routes.STARGAZER_DETAIL} component={StargazerRepositoryList}/>
    </>;
  }
}

function mapStateToProps(state) {
  return {
    stargazer: state.stargazer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SetCurrentStargazerAction,
      ClearCurrentStargazerAction,
      RemoveUserFromStargazerListAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StargazerList);
