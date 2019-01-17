import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { Title } from '@/app/elements/Base';
import { AccessTokenForm } from '@/app/Settings/components/AccessTokenForm';
import {
  ClearGithubAccessTokenAction,
  ClearGithubAccessTokenActionType,
} from '@/infrastructure/redux/actions/ClearGithubAccessTokenAction';
import {
  SetGithubAccessTokenAction,
  SetGithubAccessTokenActionType,
} from '@/infrastructure/redux/actions/SetGithubAccessTokenAction';

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
  }

  render() {
    return <>
      <Title>Settings</Title>
      <SettingsContainer>
        <SettingsTitle>Settings</SettingsTitle>
        <AccessTokenForm title='Github Access Token'
                         small='Adding this will allow more API calls per minute. For those rapid dice roll sessions.'
                         formValue={this.props.githubAccessToken}
                         handleSubmit={(accessToken: string) => this.props.SetGithubAccessTokenAction(accessToken)}
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
