import { formatRoute, Routes } from '@/renderer/Routes';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Router, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { FormContainer, FormTitle, Label, Submit } from '@/renderer/elements/Form';
import {
  AddUserToStargazerListAction,
  AddUserToStargazerListActionType,
} from '@/renderer/store/Stargazer/actions/AddUserToStargazerListAction';
import styled from 'styled-components';

interface MyFormValues {
  githubUsername: string;
}

interface State {
  formValue: string;
}

interface Props {
  history: Router;
  AddUserToStargazerListAction: AddUserToStargazerListActionType;
}

class StargazerSearch extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      formValue: '',
    };
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onSubmitSearch(values: MyFormValues) {
    this.props.AddUserToStargazerListAction(values.githubUsername);
    this.setState({ formValue: '' });
    this.props.history.push(formatRoute(Routes.STARGAZER_DETAIL, { login: values.githubUsername}));
  }

  render() {
    return <Container>
      <FormContainer>
        <Formik
          initialValues={{
            githubUsername: this.state.formValue,
          }}
          onSubmit={this.onSubmitSearch}
          render={({ isSubmitting }) => (
            <Form>
              <Label htmlFor='githubUsername'>
                Search by GitHub username
                <small>For the moment, I need an exact match to GitHub username.</small>
              </Label>
              <Field id='githubUsername'
                     name='githubUsername'
                     placeholder='GitHub Username'
                     type='text'
              />
              <Submit type='submit'>Submit</Submit>
            </Form>
          )}
        />
      </FormContainer>
    </Container>;
  }
}

const Container = styled.div`
  padding: 1rem;
`;

function mapStateToProps(state) {
  return {
    currentStargazer: state.currentStargazer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      AddUserToStargazerListAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StargazerSearch);
