import { Anchor } from '@/renderer/elements/Base';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import { Formik, FormikActions } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { FormContainer, HollowButtonPrimary, Input, Label } from '@/renderer/elements/Form';

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

  get githubLink() {
    const description = 'Traverse';
    const scopes = [
      'public_repo',
      'read:user',
      'user:email',
      'user:follow',
    ];
    return `https://github.com/settings/tokens/new?description=${description}&scopes=${scopes.join(',')}`;
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
            <Label htmlFor='accessToken' className='access-token-label'>
              <h4>
                Github Access Token
                <SmallAnchor className='open-link-externally'
                             href={this.githubLink}
                >Click here to create a token</SmallAnchor>
              </h4>
              <p>Easily see your starred repositories and enable 3x more API calls per minute.</p>
            </Label>
            <Input
              type='text'
              name='accessToken'
              placeholder='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
              disabled={!!accessToken}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.accessToken}
            />
            <Error>
              {!accessToken && errors.accessToken && touched.accessToken && errors.accessToken}
            </Error>
            {accessToken ? <Clear onClick={this.handleClear}>Clear</Clear> : (
              <>
                <HollowButtonPrimary type='submit' disabled={isSubmitting}>
                  Submit
                </HollowButtonPrimary>
              </>
            )}
          </form>
        )}
      </Formik>
    </FormContainer>;
  }
}

const SmallAnchor = styled(Anchor)`
  font-size: 0.75rem;
  margin-left: 0.5rem;
`;

const Error = styled.span`
  float: right;
  color: ${themeConfig.colors.red};
`;

const Clear = styled(HollowButtonPrimary)`
  float: right;
  position: relative;
  bottom: 39.5px;
  border-color: ${themeConfig.colors.red};
  color: ${themeConfig.colors.red};
  &:hover {
    border-color: ${themeConfig.colors.redDark};
    color: ${themeConfig.colors.redDark};
  }
`;
