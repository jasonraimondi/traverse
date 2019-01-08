import { Field, Form, Formik, FormikActions } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { PillButton } from '@/app/elements/base';
import { theme } from '@/infrastructure/styles/theme';

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

interface FormValues {
  githubAccessToken: string;
}

export class AccessTokenForm extends React.Component<Props, State> {
  readonly editIcon = require('@/assets/icons/icon-edit.svg');

  constructor(props: Props) {
    super(props);
    this.state = {
      isEditMode: false,
      formValue: props.formValue || '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values: FormValues, { setSubmitting }: FormikActions<FormValues>) {
    setTimeout(() => setSubmitting(false), 500);
    this.props.handleSubmit(values.githubAccessToken);
  }

  render() {
    const isEditable = this.state.isEditMode;
    const small = this.props.small ? <Small>{this.props.small}</Small> : null;

    return <Formik
      initialValues={{
        githubAccessToken: '',
      }}
      onSubmit={this.handleSubmit}
      render={() => (
        <Form>
          <Label htmlFor='githubAccessToken'>
            <Title>{this.props.title}</Title>
            {small}
          </Label>
          <Field id='githubAccessToken'
                 name='githubAccessToken'
                 placeholder='github-personal-access-token'
                 type='text'
          />
          <Submit type='submit'>Submit</Submit>
        </Form>
      )}
    />;
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
// const Input = `
//   background-color: transparent;
//   outline: none;
//   border: none;
//   border-bottom: 2px solid ${theme.colors.grey};
//   min-width: 273px;
//   .selected & {
//     border-bottom-color: ${theme.colors.purple};
//   }
// `;

// const ToggleEditButton = styled.span`
//   float: right;
//   &:hover {
//     cursor: pointer;
//   }
//   & svg {
//     width: 2rem;
//     height: 2rem;
//   }
//   & svg .primary {
//     fill: ${theme.colors['grey-darker']};
//   }
//   & svg .secondary {
//     fill: ${theme.colors.grey};
//   }
//   &:hover svg .primary {
//     fill: ${theme.colors['purple-darker']};
//   }
//   &:hover svg .secondary {
//     fill: ${theme.colors.purple};
//   }
//   &.selected svg .primary {
//     fill: ${theme.colors['green-darker']};
//   }
//   &.selected svg .secondary {
//     fill: ${theme.colors.green};
//   }
// `;

const Submit = styled(PillButton)`
  display: block;
  margin-top: 0.5rem;
  background-color: ${theme.colors.grey};
  &:hover {
    color: ${theme.colors['']};
  }
`;

// const FormContainer = styled.form`
//   margin-top: 1rem;
//   background-color: ${theme.colors['grey-lightest']};
//   padding: 0.5rem;
// `;

// const SettingsContainer = styled.div`
//   padding: 0.5rem;
// `;
