import { formatRoute, Routes } from '@/app/Routes';
import {
  AddUserToStargazerListAction,
  AddUserToStargazerListActionType,
} from '@/infrastructure/redux/actions/AddUserToStargazerListAction';
import { ClearCurrentStargazerAction } from '@/infrastructure/redux/actions/ClearCurrentStargazerAction';
import {
  SetCurrentStargazerAction,
  SetCurrentStargazerActionType,
} from '@/infrastructure/redux/actions/SetCurrentStargazerAction';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { EmptyStargazerRepositoryList } from '@/app/Stargazer/StargazerList/components/EmptyStargazerRepositoryList';
import { CurrentStargazerReducer } from '@/infrastructure/redux/reducers/CurrentStargazer.reducer';
import { RepositoryList } from '@/app/elements/RepositoryList';
import { themeConfig } from '@/infrastructure/styles/Theme';

interface Props {
  history: any;
  currentStargazer: CurrentStargazerReducer;
  SetCurrentStargazerAction: SetCurrentStargazerActionType;
  AddUserToStargazerListAction: AddUserToStargazerListActionType;
  ClearCurrentStargazerAction: () => void;
}

class StargazerRepositoryList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleStargazerClick = this.handleStargazerClick.bind(this);
    this.handleStargazerPin = this.handleStargazerPin.bind(this);
    this.handleStargazerClear = this.handleStargazerClear.bind(this);
  }

  handleStargazerClick(login: string) {
    this.props.SetCurrentStargazerAction(login);
    this.props.history.push(formatRoute(Routes.STARGAZER_DETAIL, { login }));
  }

  handleStargazerPin() {
    this.props.AddUserToStargazerListAction(this.props.currentStargazer.login);
  }

  handleStargazerClear() {
    this.props.ClearCurrentStargazerAction();
    this.props.history.push(formatRoute(Routes.STARGAZER));
  }

  render() {
    let content = <EmptyStargazerRepositoryList/>;

    if (this.props.currentStargazer) {
      content = <>
        <h4>
          {this.props.currentStargazer.login}
          <a onClick={this.handleStargazerClear}> Clear</a>
          <a onClick={this.handleStargazerPin}> Pin</a>
        </h4>
        <RepositoryList
          handleStargazerClick={this.handleStargazerClick}
          emptyRepositoryList={<EmptyStargazerRepositoryList/>}
          repositoryList={this.props.currentStargazer.repositoryList}
        />
      </>;
    }

    return <StargazerDetail>{content}</StargazerDetail>;
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SetCurrentStargazerAction,
      ClearCurrentStargazerAction,
      AddUserToStargazerListAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StargazerRepositoryList);
