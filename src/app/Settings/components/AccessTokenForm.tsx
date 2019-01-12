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

const FormContainer = styled.div`
  margin-top: 0.5rem;
  border-radius: 3px;
  border: 2px solid ${themeConfig.colors['grey-lighter']};
  background-color: ${themeConfig.colors['grey-lightest']};
  padding: 0.35rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
`;
const Title = styled.h5`
  display: inline-block;
  margin: 0;
  margin-bottom: 0.5rem;
  &.selected {
    color: ${themeConfig.colors['green-darker']}
  }
`;
const Small = styled.p`
  word-break: keep-all;
  width: 50%;
  max-width: 400px;
  min-width: 300px;
  font-size: 0.8rem;
  margin: 0;
  color: ${themeConfig.colors['grey-dark']};
`;

const Submit = styled.button`
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  display: block;
  margin-top: 0.5rem;
  color: ${themeConfig.colors.purple};
  background-color: ${themeConfig.colors.white};
  border-color: ${themeConfig.colors.purple};
  &:active, &:hover, &.selected {
    text-decoration: none;
    outline: none;
  }
`;
