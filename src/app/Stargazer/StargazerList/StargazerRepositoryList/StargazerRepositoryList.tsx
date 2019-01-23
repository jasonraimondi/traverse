import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { RepositoryList } from '@/app/elements/RepositoryList';
import { formatRoute, Routes } from '@/app/Routes';
import {
  EmptyStargazerRepositoryList,
} from '@/app/Stargazer/StargazerList/StargazerRepositoryList/components/EmptyStargazerRepositoryList';
import { Icon } from '@/app/TrendingRepos/components/LanguageListPicker';
import {
  AddUserToStargazerListAction,
  AddUserToStargazerListActionType,
} from '@/infrastructure/redux/Stargazer/actions/AddUserToStargazerListAction';
import { ClearCurrentStargazerAction } from '@/infrastructure/redux/Stargazer/actions/ClearCurrentStargazerAction';
import {
  SetCurrentStargazerAction,
  SetCurrentStargazerActionType,
} from '@/infrastructure/redux/Stargazer/actions/SetCurrentStargazerAction';
import { StargazerStore } from '@/infrastructure/redux/Stargazer/Store';
import { themeConfig } from '@/infrastructure/styles/Theme';

interface Props {
  history: any;
  stargazer: StargazerStore;
  SetCurrentStargazerAction: SetCurrentStargazerActionType;
  AddUserToStargazerListAction: AddUserToStargazerListActionType;
  ClearCurrentStargazerAction: () => void;
}

class StargazerRepositoryList extends React.Component<Props> {
  readonly iconPin = require('@/infrastructure/assets/icons/icon-pin.svg');
  readonly iconClose = require('@/infrastructure/assets/icons/icon-close-circle.svg');

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
    this.props.AddUserToStargazerListAction(this.props.stargazer.currentUserLogin);
  }

  handleStargazerClear() {
    this.props.ClearCurrentStargazerAction();
    this.props.history.push(formatRoute(Routes.STARGAZER));
  }

  render() {
    let content = <EmptyStargazerRepositoryList/>;

    if (this.props.stargazer.currentUserLogin) {
      content = <>
        <TitleBar>
          <NavIcon onClick={this.handleStargazerPin}
                title='Add to your stargazer list'
                dangerouslySetInnerHTML={{ __html: this.iconPin }}
          />
          <NavIcon onClick={this.handleStargazerClear}
                title='Add to your stargazer list'
                dangerouslySetInnerHTML={{ __html: this.iconClose }}
          />
        </TitleBar>
        <ScrollView>
          <RepositoryList
            repositoryList={this.props.stargazer.repositoryList.list[this.props.stargazer.currentUserLogin]}
            handleStargazerClick={this.handleStargazerClick}
            emptyRepositoryList={<EmptyStargazerRepositoryList/>}
          />
        </ScrollView>
      </>;
    }

    return <>
      <Close onClick={this.handleStargazerClear}>
        Close
      </Close>
      <StargazerDetail>{content}</StargazerDetail>
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
    fill: ${themeConfig.colors['green-darker']};
  }
  &:hover .secondary {
    fill: ${themeConfig.colors.green};
  }
`;

const TitleBar = styled.div`
  background-color: ${themeConfig.colors.purple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 1rem;
`;

const Close = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: ${themeConfig.colors.white};
  top: ${themeConfig.sizes.topbarHeight};
  left: 0;
  bottom: ${themeConfig.sizes.bottomNavHeight};
  background-color: ${themeConfig.colors['grey-darker']};
  right: calc(100% - ${themeConfig.sizes.sidebarWidth});
`;

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
    stargazer: state.stargazer,
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
