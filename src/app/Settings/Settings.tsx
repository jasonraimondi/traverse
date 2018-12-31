import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { SetGithubAccessTokenAction } from '@/infrastructure/redux/actions/SetGithubAccessToken.action';

interface Props {
  githubAccessToken: string;
}

class Settings extends React.Component<Props> {
    render() {
        return <div>Github AccessToken: {this.props.githubAccessToken}</div>;
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
