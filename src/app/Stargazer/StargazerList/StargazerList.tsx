import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { formatRoute, Routes } from '@/app/Routes';
import { ClearCurrentStargazerAction } from '@/infrastructure/redux/actions/ClearCurrentStargazerAction';
import { CurrentStargazerReducer } from '@/infrastructure/redux/reducers/CurrentStargazer.reducer';
import StargazerRepositoryList from '@/app/Stargazer/StargazerList/components/StargazerRepositoryList';
import {
  SetCurrentStargazerAction,
  SetCurrentStargazerActionType,
} from '@/infrastructure/redux/actions/SetCurrentStargazerAction';
import { StargazerListReducer } from '@/infrastructure/redux/reducers/StargazerList.reducer';
import { UserEntity } from '@/models/User.entity';

interface Props {
  history: any;
  currentStargazer: CurrentStargazerReducer;
  stargazerList: StargazerListReducer;
  SetCurrentStargazerAction: SetCurrentStargazerActionType;
  ClearCurrentStargazerAction: () => void;
}

class StargazerList extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.handleSetStargazer = this.handleSetStargazer.bind(this);
  }

  handleSetStargazer(user: UserEntity) {
    const login = user.attributes.login;
    this.props.SetCurrentStargazerAction(login);
    this.props.history.push(formatRoute(Routes.STARGAZER_DETAIL, { login }));
  }

  get stargazerList() {
    return Object.values(this.props.stargazerList)
      .map((user) => <div onClick={() => this.handleSetStargazer(user)} key={user.id}>
        <img width={50} src={user.attributes.avatarUrl} alt={`${user.attributes.login} avatar`}/>
        {user.attributes.name}
      </div>);
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
    currentStargazer: state.currentStargazer,
    stargazerList: state.stargazerList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SetCurrentStargazerAction,
      ClearCurrentStargazerAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StargazerList);
