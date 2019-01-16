import { RepositoryList } from '@/app/elements/RepositoryList';
import { EmptyStargazerRepositoryList } from '@/app/Stargazer/StargazerList/EmptyStargazerRepositoryList';
import { ClearCurrentStargazerAction } from '@/infrastructure/redux/actions/ClearCurrentStargazerAction';
import { listByIdsReducer } from '@/infrastructure/redux/actions/FetchRepositoryListAction';
import { CurrentStargazerReducer } from '@/infrastructure/redux/reducers/CurrentStargazer.reducer';
import { RepositoryListReducer } from '@/infrastructure/redux/reducers/RepositoryList.reducer';
import { serviceFactory } from '@/infrastructure/services/ServiceFactory';
import { themeConfig } from '@/infrastructure/styles/Theme';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import {
  SetCurrentStargazerAction,
  SetCurrentStargazerActionType,
} from '@/infrastructure/redux/actions/SetCurrentStargazerAction';
import { StargazerListReducer } from '@/infrastructure/redux/reducers/StargazerList.reducer';
import { UserEntity } from '@/models/User.entity';

interface Props {
  match: any;
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
    this.props.SetCurrentStargazerAction(user.attributes.login);
  }

  get stargazerList() {
    return Object.values(this.props.stargazerList)
      .map((user) => <div onClick={() => this.handleSetStargazer(user)} key={user.id}>
        <img width={50} src={user.attributes.avatarUrl} alt={`${user.attributes.login} avatar`}/>
        {user.attributes.name}
      </div>);
  }

  get stargazerDetail() {
    return this.props.currentStargazer ? (
      <StargazerDetail>
        {this.props.currentStargazer.login}
        <a onClick={this.props.ClearCurrentStargazerAction}>Clear</a>
        <RepositoryList
          emptyRepositoryList={<EmptyStargazerRepositoryList />}
          repositoryList={this.props.currentStargazer.repositoryList}
        />
      </StargazerDetail>
    ) : null;
  }

  render() {
    return <>
      {this.stargazerDetail}
      {this.stargazerList.length ? this.stargazerList : 'No stargazers'}
    </>;
  }
}

const StargazerDetail = styled.div`
  position: absolute;
  top: ${themeConfig.sizes.topbarHeight};
  bottom: ${themeConfig.sizes.bottomNavHeight};
  right: 0;
  left: ${themeConfig.sizes.sidebarWidth};
  background-color: rgba(255, 255, 255, 0.98);
  overflow-y: auto;
`;

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
