import * as React from 'react';
import { Link, Redirect, Route, Router, Switch, withRouter } from 'react-router-dom';

import { RepositoryList } from '@/renderer/elements/RepositoryList';
import { UserProfile } from '@/renderer/elements/UserProfile';
import { RepositoryEntity } from '@/renderer/infrastructure/model/Repository.entity';
import { UserEntity } from '@/renderer/infrastructure/model/User.entity';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import { formatRoute, Routes } from '@/renderer/Routes';
import {
  FetchUserStarredRepositoryListActionType,
} from '@/renderer/store/Stargazer/actions/FetchUserStarredRepositoryListAction';
import styled from 'styled-components';

interface Props {
  user: UserEntity;
  isLoading: boolean;
  repositoryList: RepositoryEntity[];
  handleStargazerClick(login: string): void;
  FetchUserStarredRepositoryListAction: FetchUserStarredRepositoryListActionType;
}

export class UserStarredRepositoryList extends React.Component<Props> {
  get user() {
    return this.props.user;
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
    return this.props.repositoryList;
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
          loading={this.props.isLoading}
          repositoryList={this.repositoryList}
          handleStargazerClick={this.props.handleStargazerClick}
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
