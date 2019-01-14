import { RepositoryList } from '@/app/TrendingRepos/components/RepositoryList';
import { ClearCurrentStargazerAction } from '@/infrastructure/redux/actions/ClearCurrentStargazerAction';
import { serviceFactory } from '@/infrastructure/services/ServiceFactory';
import { themeConfig } from '@/infrastructure/styles/Theme';
import { RepositoryEntity } from '@/models/Repository.entity';
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
  currentStargazer: string;
  stargazerList: StargazerListReducer;
  SetCurrentStargazerAction: SetCurrentStargazerActionType;
  ClearCurrentStargazerAction: () => void;
}

interface State {
  currentUserStarredRepositoryList: RepositoryEntity[];
}

class StargazerList extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentUserStarredRepositoryList: [],
    };
    this.handleSetStargazer = this.handleSetStargazer.bind(this);
  }

  handleSetStargazer(user: UserEntity) {
    this.props.SetCurrentStargazerAction(user.attributes.login);
    this.setState({ currentUserStarredRepositoryList: [] }, async () => {
      const repos = await serviceFactory.githubClient.user.listStarred(user.attributes.login);
      this.setState({ currentUserStarredRepositoryList: repos });
    });
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
        {this.props.currentStargazer}
        <a onClick={this.props.ClearCurrentStargazerAction}>Clear</a>
        {this.state.currentUserStarredRepositoryList.map((repo) => <p>{repo.attributes.longName}</p>)}
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
  left: 69px;
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
