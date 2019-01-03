import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import {
  SetGithubAccessTokenAction,
  SetGithubAccessTokenActionType,
} from '@/infrastructure/redux/actions/SetGithubAccessToken.action';

interface Props {
  githubAccessToken: string;
  SetGithubAccessTokenAction: SetGithubAccessTokenActionType;
}

interface State {
  isEditMode: boolean;
  githubAccessToken: string;
}

class Settings extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isEditMode: false,
      githubAccessToken: props.githubAccessToken,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ githubAccessToken: event.target.value });
  }

  handleSubmit(event) {
    this.props.SetGithubAccessTokenAction(this.state.githubAccessToken);
    event.preventDefault();
  }

  render() {
    const showEditForm = this.state.isEditMode || !this.props.githubAccessToken;

    const form = <form onSubmit={this.handleSubmit}>
      <label>
        Github Access Token:
        <input type='text'
               value={this.state.githubAccessToken}
               onChange={this.handleChange}
        />
      </label>
      <input type='submit' value='Submit'/>
    </form>;

    const block = <div>
      Github Access Token: {this.props.githubAccessToken}
    </div>;

    return <div>
      <button onClick={() => this.setState({ isEditMode: !this.state.isEditMode })}>
        Toggle Edit Mode
      </button>
      {showEditForm ? form : block}
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    githubAccessToken: state.githubAccessToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      SetGithubAccessTokenAction,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
