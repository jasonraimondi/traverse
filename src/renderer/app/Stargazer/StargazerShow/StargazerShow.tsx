import { RefObject } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { Icon } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { UserStarredRepositoryList } from '@/renderer/elements/UserStarredRepositoryList';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import { formatRoute, Routes } from '@/renderer/Routes';
import {
  AddUserToStargazerListAction,
  AddUserToStargazerListActionType,
} from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';
import {
  FetchUserStarredRepositoryListAction,
  FetchUserStarredRepositoryListActionType,
} from '@/renderer/store/Stargazer/actions/FetchUserStarredRepositoryListAction';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';

interface Props {
  match: any;
  history: any;
  stargazer: StargazerStore;
  AddUserToStargazerListAction: AddUserToStargazerListActionType;
  FetchUserStarredRepositoryListAction: FetchUserStarredRepositoryListActionType;
}

class StargazerShow extends React.Component<Props> {
  readonly iconPin = require('@/assets/icons/icon-pin.svg');
  readonly iconClose = require('@/assets/icons/icon-close-circle.svg');
  readonly scrollToRef: RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.handleStargazerClick = this.handleStargazerClick.bind(this);
    this.handleStargazerPin = this.handleStargazerPin.bind(this);
    this.handleStargazerClear = this.handleStargazerClear.bind(this);
    this.scrollToRef = React.createRef();
  }

  componentDidMount(): void {
    this.props.FetchUserStarredRepositoryListAction(this.currentUserLogin);
  }

  handleStargazerClick(login: string) {
    this.props.FetchUserStarredRepositoryListAction(login);
    this.props.history.push(formatRoute(Routes.STARGAZER_DETAIL, {login}));
  }

  handleStargazerPin() {
    this.props.AddUserToStargazerListAction(this.currentUserLogin);
  }

  handleStargazerClear() {
    this.props.history.push(formatRoute(Routes.STARGAZER));
  }

  get currentUserLogin() {
    return this.props.match.params.login;
  }

  get stargazerData() {
    if (this.props.stargazer.repositoryList
      && this.props.stargazer.repositoryList[this.currentUserLogin]
      && this.props.stargazer.repositoryList[this.currentUserLogin].data) {
      return this.props.stargazer.repositoryList[this.currentUserLogin].data;
    }
    return false;
  }

  get stargazerUser() {
    if (this.stargazerData === false) {
      return null;
    }
    return this.stargazerData.user;
  }

  get stargazerRepositoryList() {
    if (this.stargazerData === false) {
      return [];
    }
    return this.stargazerData.stargazerRepositoryList;
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
    if (JSON.stringify(this.props) !== JSON.stringify(prevProps)) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <>
      <StargazerDetail>
        <TitleBar>
          <NavIcon onClick={this.handleStargazerPin}
                   title='Add to your stargazer list'
                   dangerouslySetInnerHTML={{__html: this.iconPin}}
          />
          <NavIcon onClick={this.handleStargazerClear}
                   title='Add to your stargazer list'
                   dangerouslySetInnerHTML={{__html: this.iconClose}}
          />
        </TitleBar>
        <ScrollView ref={this.scrollToRef}>
          <UserStarredRepositoryList
            handleStargazerClick={this.handleStargazerClick}
            isLoading={this.props.stargazer.loading}
            user={this.stargazerUser}
            repositoryList={this.stargazerRepositoryList}
            FetchUserStarredRepositoryListAction={this.props.FetchUserStarredRepositoryListAction}
          />
        </ScrollView>
      </StargazerDetail>
    </>;
  }
}

const ScrollView = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

const NavIcon = styled(Icon)`
  & svg {
    cursor: pointer;
  }
  &:hover .primary {
    fill: ${themeConfig.colors.greenDarker};
  }
  &:hover .secondary {
    fill: ${themeConfig.colors.green};
  }
`;

const TitleBar = styled.div`
  background-color: ${themeConfig.colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 1rem;
`;

const StargazerDetail = styled.div`
  background-color: rgba(255, 255, 255, 0.98);
  overflow-y: auto;
`;

function mapStateToProps(state) {
  return {
    stargazer: state.stargazer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      AddUserToStargazerListAction,
      FetchUserStarredRepositoryListAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StargazerShow);
