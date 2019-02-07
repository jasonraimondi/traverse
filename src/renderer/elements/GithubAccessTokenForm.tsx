import * as dayjs from 'dayjs';
import { Formik, FormikActions } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { Anchor } from '@/renderer/elements/Base';
import { FormContainer, HollowButtonPrimary, Input, Label } from '@/renderer/elements/Form';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

interface Props {
  accessToken: string;

  handleSubmit(accessToken: string): void;

  handleClear(): void;
}

interface FormValues {
  accessToken: string;
}

export class GithubAccessTokenForm extends React.Component<Props> {
  private readonly findWhiteSpace = /\s/g;

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClear() {
    if (window.confirm('This will clear your token, you sure you want to do that?')) {
      this.props.handleClear();
    }
  }

  handleSubmit(values: FormValues, {setSubmitting}: FormikActions<FormValues>) {
    const accessToken = values.accessToken.replace(this.findWhiteSpace, '');
    this.props.handleSubmit(accessToken);
    setTimeout(() => setSubmitting(false), 500);
  }

  get githubLink() {
    const dateString = dayjs().format('YYYY-MM-DD');
    const description = encodeURIComponent(`Traverse ${dateString}`);
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
    const formValues: FormValues = {accessToken};
    return <FormContainer>
      <Formik
        enableReinitialize
        initialValues={formValues}
        validate={(values: FormValues) => {
          const errors: any = {};
          if (!values.accessToken) {
            errors.accessToken = 'Required';
          } else if (this.findWhiteSpace.test(values.accessToken)) {
            errors.accessToken = 'No Spaces';
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
                {accessToken ? (
                  <Clear onClick={this.handleClear}>&times;</Clear>
                ) : (
                  <SmallAnchor className='open-link-externally'
                               href={this.githubLink}
                  >Click here to create a token</SmallAnchor>
                )}
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
            {accessToken ? null : (
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

const Clear = styled.span`
  float: right;
  border-color: ${themeConfig.colors.purple};
  color: ${themeConfig.colors.purple};
  &:hover {
    border-color: ${themeConfig.colors.purpleDark};
    color: ${themeConfig.colors.purpleDark};
  }
`;
