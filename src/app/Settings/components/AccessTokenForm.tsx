import { Field, Form, Formik, FormikActions } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '@/infrastructure/styles/Theme';

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

    return <>
      <style>{inputStyle}</style>
      <FormContainer>
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
      </FormContainer>
    </>;
  }
}

const FormContainer = styled.div`
  margin-top: 0.5rem;
  border-radius: 3px;
  border: 2px solid ${theme.colors['grey-lighter']};
  background-color: ${theme.colors['grey-lightest']};
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
    color: ${theme.colors['green-darker']}
  }
`;
const Small = styled.p`
  word-break: keep-all;
  width: 50%;
  max-width: 400px;
  min-width: 300px;
  font-size: 0.8rem;
  margin: 0;
  color: ${theme.colors['grey-dark']};
`;
const inputStyle = `
  #githubAccessToken {
    display: block;
    font-size: 1rem;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 3px;
    min-width: 350px;
    max-width: 450px;
    width: 100%;
    padding: 0.25rem 0.5rem 0.35rem;
    margin-top: 0.5rem;
    border: 1px solid ${theme.colors.purple};
    &:disabled,
    &[disabled] {
      border-color: ${theme.colors.grey};
    }
  }
`;

const Submit = styled.button`
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  display: block;
  margin-top: 0.5rem;
  color: ${theme.colors.purple};
  background-color: ${theme.colors.white};
  border-color: ${theme.colors.purple};
  &:active, &:hover, &.selected {
    text-decoration: none;
    outline: none;
  }
`;
