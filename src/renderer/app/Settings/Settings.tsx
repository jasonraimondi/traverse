import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { Title } from '@/renderer/elements/Base';
import { GithubAccessTokenForm } from '@/renderer/elements/GithubAccessTokenForm';
import {
  ClearGithubAccessTokenAction,
  ClearGithubAccessTokenActionType,
} from '@/renderer/store/Settings/actions/ClearGithubAccessTokenAction';
import {
  SetGithubAccessTokenAction,
  SetGithubAccessTokenActionType,
} from '@/renderer/store/Settings/actions/SetGithubAccessTokenAction';
import { SettingsStore } from '@/renderer/store/Settings/Store';

interface Props {
  settings: SettingsStore;
  SetGithubAccessTokenAction: SetGithubAccessTokenActionType;
  ClearGithubAccessTokenAction: ClearGithubAccessTokenActionType;
}

interface State {
  isEditMode: boolean;
  githubAccessToken: string;
}

class Settings extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isEditMode: false,
      githubAccessToken: this.accessToken,
    };
  }

  get accessToken() {
    if (this.props.settings.github) {
      return this.props.settings.github.accessToken;
    }
    return '';
  }

  render() {
    return <>
      <Title>Settings</Title>
      <SettingsContainer>
        <SettingsTitle>Settings</SettingsTitle>
        <GithubAccessTokenForm
          accessToken={this.accessToken}
          handleSubmit={this.props.SetGithubAccessTokenAction}
          handleClear={this.props.ClearGithubAccessTokenAction}
        />
      </SettingsContainer>
    </>;
  }
}

const SettingsTitle = styled.h1`
  margin: 0;
  padding: 0;
`;
const SettingsContainer = styled.div`
  padding: 0.5rem;
`;

function mapStateToProps(state) {
  return {
    settings: state.settings,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SetGithubAccessTokenAction,
      ClearGithubAccessTokenAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
