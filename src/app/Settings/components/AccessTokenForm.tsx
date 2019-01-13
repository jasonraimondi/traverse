import { FormContainer, Label, Submit, Title } from '@/app/elements/Form';
import { Field, Form, Formik, FormikActions } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { themeConfig } from '@/infrastructure/styles/Theme';

interface Props {
  title: string;
  small?: string;
  formValue: string;
  handleSubmit(accessToken: string): void;
}

interface State {
  formValue: string;
}

interface FormValues {
  githubAccessToken: string;
}

export class AccessTokenForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      formValue: props.formValue || '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values: FormValues, { setSubmitting }: FormikActions<FormValues>) {
    this.props.handleSubmit(values.githubAccessToken);
    setTimeout(() => setSubmitting(false), 500);
  }

  render() {
    const small = this.props.small ? <Small>{this.props.small}</Small> : null;

    return <FormContainer>
        <Formik
          initialValues={{
            githubAccessToken: this.state.formValue,
          }}
          onSubmit={this.handleSubmit}
          render={({ isSubmitting }) => (
            <Form>
              <Label htmlFor='githubAccessToken'>
                <Title>{this.props.title}</Title>
                {small}
              </Label>
              <Field id='githubAccessToken'
                     name='githubAccessToken'
                     disabled={isSubmitting}
                     placeholder='personal-access-token'
                     type='text'
              />
              <Submit disabled={isSubmitting} type='submit'>Submit</Submit>
            </Form>
          )}
        />
      </FormContainer>;
  }
}

const Small = styled.p`
  word-break: keep-all;
  width: 50%;
  max-width: 400px;
  min-width: 300px;
  font-size: 0.8rem;
  margin: 0;
  color: ${themeConfig.colors['grey-dark']};
`;
