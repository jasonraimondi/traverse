import { validateGithubAccessToken } from '@/infrastructure/github-sdk/api/validate-github-access-token';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { FormBlock } from '@/app/Settings/FormBlock';
import {
  ClearGithubAccessTokenAction,
  ClearGithubAccessTokenActionType,
} from '@/infrastructure/redux/actions/ClearGithubAccessToken.action';
import {
  SetGithubAccessTokenAction,
  SetGithubAccessTokenActionType,
} from '@/infrastructure/redux/actions/SetGithubAccessToken.action';

interface Props {
  githubAccessToken: string;
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
      githubAccessToken: props.githubAccessToken,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    const isValid = await validateGithubAccessToken(this.state.githubAccessToken);
    if (!isValid) {
      this.props.ClearGithubAccessTokenAction();
      return;
    }
    this.props.SetGithubAccessTokenAction(this.state.githubAccessToken);
  }

  render() {
    return <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <FormBlock title='Github Access Token'
                 small='Adding this will allow more API calls per minute. For those rapid dice roll sessions.'
                 formValue={this.props.githubAccessToken}
                 handleSubmit={this.handleSubmit}
      />
    </SettingsContainer>;
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
    githubAccessToken: state.githubAccessToken,
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
