import { FormContainer, Label, Submit, Title } from '@/app/elements/Form';
import { Field, Form, Formik } from 'formik';
import * as React from 'react';

interface MyFormValues {
  githubUsername: string;
}

interface State {
  formValue: string;
}

export class StargazerSearch extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      formValue: '',
    };
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onSubmitSearch(values: MyFormValues) {
    alert(JSON.stringify(values));
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
              <Title>Search by GitHub username</Title>
            </Label>
            <Field id='githubUsername'
                   name='githubUsername'
                   disabled={isSubmitting}
                   placeholder='GitHub Username'
                   type='text'
            />
            <Submit disabled={isSubmitting} type='submit'>Submit</Submit>
          </Form>
        )}
      />
    </FormContainer>;
  }
}
