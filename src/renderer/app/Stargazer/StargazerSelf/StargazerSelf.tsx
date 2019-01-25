import { SettingsStore } from '@/renderer/store/Settings/Store';
import { StargazerStore } from '@/renderer/store/Stargazer/Store';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

interface Props {
  settings: SettingsStore;
  stargazer: StargazerStore;
}

class StargazerSelf extends React.Component<Props> {
  get user() {
    if (this.props.settings.github && this.props.settings.github.user) {
      return this.props.settings.github.user;
    }
    return false;
  }

  get repositoryList() {
    // ;
  }

  render() {
    return <>
      {}
    </>;
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    stargazer: state.stargazer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {},
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(StargazerSelf);
