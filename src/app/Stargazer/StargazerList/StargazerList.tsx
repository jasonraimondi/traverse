import { formatRoute, Routes } from '@/app/Routes';
import { StargazerDetail } from '@/app/Stargazer/StargazerList/components/StargazerDetail';
import StargazerRepositoryList from '@/app/Stargazer/StargazerList/components/StargazerRepositoryList';
import { ClearCurrentStargazerAction } from '@/infrastructure/redux/actions/ClearCurrentStargazerAction';
import {
  RemoveUserFromStargazerListAction,
  RemoveUserFromStargazerListActionType,
} from '@/infrastructure/redux/actions/RemoveUserFromStargazerListAction';
import {
  SetCurrentStargazerAction,
  SetCurrentStargazerActionType,
} from '@/infrastructure/redux/actions/SetCurrentStargazerAction';
import { CurrentStargazerReducer } from '@/infrastructure/redux/reducers/CurrentStargazer.reducer';
import { StargazerListReducer } from '@/infrastructure/redux/reducers/StargazerList.reducer';
import { UserEntity } from '@/models/User.entity';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

interface Props {
  history: any;
  currentStargazer: CurrentStargazerReducer;
  stargazerList: StargazerListReducer;
  SetCurrentStargazerAction: SetCurrentStargazerActionType;
  ClearCurrentStargazerAction: () => void;
  RemoveUserFromStargazerListAction: RemoveUserFromStargazerListActionType;
}

class StargazerList extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.handleSetStargazer = this.handleSetStargazer.bind(this);
    this.handleRemoveStargazer = this.handleRemoveStargazer.bind(this);
  }

  componentDidUpdate(): void {
    if (this.props.history.location.pathname === '/stargazer' && this.props.currentStargazer) {
      this.props.ClearCurrentStargazerAction();
    }
  }

  handleSetStargazer(user: UserEntity) {
    const login = user.attributes.login;
    this.props.SetCurrentStargazerAction(login);
    this.props.history.push(formatRoute(Routes.STARGAZER_DETAIL, { login }));
  }

  handleRemoveStargazer(user: UserEntity) {
    this.props.RemoveUserFromStargazerListAction(user.attributes.login);
  }

  get stargazerList() {
    return Object.values(this.props.stargazerList)
      .map((user) => {
        const noneSelected = !this.props.currentStargazer;
        let shouldGreyscaleImage = true;

        if (noneSelected) {
          shouldGreyscaleImage = false;
        } else if (this.props.currentStargazer.login === user.attributes.login) {
          shouldGreyscaleImage = false;
        }
        return <StargazerDetail key={user.id}
                                shouldGreyscaleImage={shouldGreyscaleImage}
                                handleClickStargazer={() => this.handleSetStargazer(user)}
                                handleRemoveStargazer={() => this.handleRemoveStargazer(user)}
                                user={user}
        />;
      });
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
      RemoveUserFromStargazerListAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StargazerList);
