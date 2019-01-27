import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import { Formik, FormikActions } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { FormContainer, Input, Label, Submit } from '@/renderer/elements/Form';

interface Props {
  accessToken: string;
  handleSubmit(accessToken: string): void;
  handleClear(): void;
}

interface FormValues {
  accessToken: string;
}

export class GithubAccessTokenForm extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClear() {
    this.props.handleClear();
  }

  handleSubmit(values: FormValues, {setSubmitting}: FormikActions<FormValues>) {
    this.props.handleSubmit(values.accessToken);
    setTimeout(() => setSubmitting(false), 500);
  }

  render() {
    const accessToken = this.props.accessToken ? this.props.accessToken : '';
    return <FormContainer>
      <Formik
        enableReinitialize
        initialValues={{accessToken}}
        validate={(values: any) => {
          const errors: any = {};
          if (!values.accessToken) {
            errors.accessToken = 'Required';
          }
          return errors;
        }}
        onSubmit={this.handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Label>
              Github Access Token
              <small>Adding this will allow more API calls per minute. For those rapid dice roll sessions.</small>
              <Error>
                {!accessToken && errors.accessToken && touched.accessToken && errors.accessToken}
              </Error>
              <Input
                type='text'
                name='accessToken'
                disabled={!!accessToken}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.accessToken}
              />
            </Label>
            {accessToken ? <Clear onClick={this.handleClear}>Clear</Clear> : (
              <Submit type='submit' disabled={isSubmitting}>
                Submit
              </Submit>
            )}

          </form>
        )}
      </Formik>
    </FormContainer>;
  }
}

const Error = styled.span`
  float: right;
  position: relative;
  top: 7.5px;
  font-size: 0.8rem;
  color: ${themeConfig.colors.red};
`;

const Clear = styled(Submit)`
  float: right;
  position: relative;
  bottom: 39.5px;
  border-color: ${themeConfig.colors.red};
  color: ${themeConfig.colors.red};
  &:hover {
    border-color: ${themeConfig.colors['red-dark']};
    color: ${themeConfig.colors['red-dark']};
  }
`;
