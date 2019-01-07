import { SetGithubAccessTokenActionType } from '@/infrastructure/redux/actions/SetGithubAccessToken.action';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { PillButton } from '@/app/elements/base';
import { theme } from '@/infrastructure/styles/theme';
import styled from 'styled-components';

interface Props {
  title: string;
  small?: string;
  formValue: string;

  handleSubmit(accessToken: string): void;
}

interface State {
  isEditMode: boolean;
  formValue: string;
}

export class AccessTokenForm extends React.Component<Props, State> {
  readonly editIcon = require('@/assets/icons/icon-edit.svg');

  constructor(props: Props) {
    super(props);
    this.state = {
      isEditMode: false,
      formValue: props.formValue,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.handleSubmit(this.state.formValue);
    e.preventDefault();
  }

  render() {
    const isEditable = this.state.isEditMode;
    const title = <Title>{this.props.title}</Title>;
    const small = this.props.small ? <Small>{this.props.small}</Small> : null;

    return <FormContainer onSubmit={this.handleSubmit}>
      <ToggleEditButton
        className={isEditable ? 'selected' : null}
        onClick={() => this.setState({ isEditMode: !this.state.isEditMode })}
        dangerouslySetInnerHTML={{ __html: this.editIcon }}
      />
      <Label htmlFor='github-access-token' className={isEditable ? 'selected' : null}>
        {title}
        {small}
        <Input id='github-access-token'
               type='text'
               disabled={!isEditable}
               value={this.state.formValue}
               onChange={(e) => this.setState({ formValue: e.target.value })}
        />
      </Label>
      <Submit disabled={!isEditable} type='submit'>Submit</Submit>
    </FormContainer>;
  }
}

const Label = styled.label`
  display: block;
  font-size: 1rem;
`;
const Title = styled.h5`
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
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid ${theme.colors.grey};
  min-width: 273px;
  .selected & {
    border-bottom-color: ${theme.colors.purple};
  }
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
