import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { FormContainer, FormTitle, Label, Submit } from '@/app/elements/Form';
import {
  AddUserToStargazerListAction,
  AddUserToStargazerListActionType,
} from '@/infrastructure/redux/Stargazer/actions/AddUserToStargazerListAction';

interface MyFormValues {
  githubUsername: string;
}

interface State {
  formValue: string;
}

interface Props {
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
  }

  render() {
    return <FormContainer>
      <Formik
        initialValues={{
          githubUsername: this.state.formValue,
        }}
        onSubmit={this.onSubmitSearch}
        render={({ isSubmitting }) => (
          <Form>
            <Label htmlFor='githubUsername'>
              <FormTitle>Search by GitHub username</FormTitle>
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
    </FormContainer>;
  }
}

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
