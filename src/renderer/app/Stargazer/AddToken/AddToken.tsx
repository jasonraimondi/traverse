import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
import styled from 'styled-components';

interface Props {
  settings: SettingsStore;
  SetGithubAccessTokenAction: SetGithubAccessTokenActionType;
  ClearGithubAccessTokenAction: ClearGithubAccessTokenActionType;
}

class AddToken extends React.Component<Props> {

  get accessToken() {
    if (this.props.settings.github) {
      return this.props.settings.github.accessToken;
    }
    return '';
  }

  render() {
    return <Container>
      <GithubAccessTokenForm
        accessToken={this.accessToken}
        handleSubmit={this.props.SetGithubAccessTokenAction}
        handleClear={this.props.ClearGithubAccessTokenAction}
      />
    </Container>;
  }
}

const Container = styled.div`
  padding: 1rem;
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

export default connect(mapStateToProps, mapDispatchToProps)(AddToken);
