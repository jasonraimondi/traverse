import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { PillButton } from '@/app/elements/base';
import { validateGithubAccessToken } from '@/infrastructure/github/validateGithubAccessToken';
import {
  ClearGithubAccessTokenAction,
  ClearGithubAccessTokenActionType,
} from '@/infrastructure/redux/actions/ClearGithubAccessToken.action';
import {
  SetGithubAccessTokenAction,
  SetGithubAccessTokenActionType,
} from '@/infrastructure/redux/actions/SetGithubAccessToken.action';
import { theme } from '@/infrastructure/styles/theme';
import styled from 'styled-components';

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
  readonly editIcon = require('@/assets/icons/icon-edit.svg');

  constructor(props: Props) {
    super(props);
    this.state = {
      isEditMode: false,
      githubAccessToken: props.githubAccessToken,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ githubAccessToken: event.target.value });
  }

  async handleSubmit(event) {
    const isValid = await validateGithubAccessToken(this.state.githubAccessToken);
    if (!isValid) {
      this.props.ClearGithubAccessTokenAction();
      return;
    }
    this.props.SetGithubAccessTokenAction(this.state.githubAccessToken);
    event.preventDefault();
  }

  render() {
    const isEditable = this.state.isEditMode || !this.props.githubAccessToken;

    return <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <FormContainer onSubmit={this.handleSubmit}>
        <ToggleEditButton
          className={isEditable ? 'selected' : null}
          onClick={() => this.setState({ isEditMode: !this.state.isEditMode })}
          dangerouslySetInnerHTML={{ __html: this.editIcon }}
        />
        <Label htmlFor='github-access-token'>
          <Title className={isEditable ? 'selected' : null}>Github Access Token</Title>
          <br/>
          <Small>
            Adding this will allow more API calls per minute. For those rapid dice roll sessions.
          </Small>
          <Input id='github-access-token'
                 type='text'
                 disabled={!isEditable}
                 value={this.state.githubAccessToken}
                 onChange={this.handleChange}
          />
        </Label>
        <Submit className={isEditable ? null : 'invisible'} type='submit'>Submit</Submit>
      </FormContainer>
    </SettingsContainer>;
  }
}

const SettingsTitle = styled.h1`
  margin: 0;
  padding: 0;
`;
const Label = styled.label`
  display: block;
  font-size: 1rem;
`;
const Title = styled.span`
  display: inline-block;
  margin: 0;
  margin-bottom: 0.5rem;
  &.selected {
    color: ${theme.colors['green-darker']}
  }
`;
const Small = styled.p`
  word-break: keep-all;
  width: 50%;
  max-width: 400px;
  min-width: 300px;
  font-size: 0.7rem;
  margin: 0;
  color: ${theme.colors['grey-dark']};
`;
const Input = styled.input`
`;
const ToggleEditButton = styled.span`
  float: right;
  &:hover {
    cursor: pointer;
  }
  & svg {
    width: 2rem;
    height: 2rem;
  }
  & svg .primary {
    fill: ${theme.colors['grey-darker']};
  }
  & svg .secondary {
    fill: ${theme.colors.grey};
  }
  &:hover svg .primary {
    fill: ${theme.colors['purple-darker']};
  }
  &:hover svg .secondary {
    fill: ${theme.colors.purple};
  }
  &.selected svg .primary {
    fill: ${theme.colors['green-darker']};
  }
  &.selected svg .secondary {
    fill: ${theme.colors.green};
  }
`;

const Submit = styled(PillButton)`
  margin-top: 0.5rem;
`;

const FormContainer = styled.form`
  margin-top: 1rem;
  background-color: ${theme.colors['grey-lightest']};
  padding: 0.5rem;
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
