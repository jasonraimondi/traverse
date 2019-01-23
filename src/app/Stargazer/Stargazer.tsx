import { Title, UnstyledList } from '@/app/elements/Base';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { formatRoute, Routes } from '@/app/Routes';
import StargazerList from '@/app/Stargazer/StargazerList/StargazerList';
import StargazerSearch from '@/app/Stargazer/StargazerSearch/StargazerSearch';
import { StargazerStore } from '@/infrastructure/redux/Stargazer/Store';

interface Props {
  stargazer: StargazerStore;
}

class Stargazer extends React.Component<Props> {
  get stargazer() {
    return this.props.stargazer;
  }

  get title() {
    return this.stargazer.currentUserLogin ? `${this.stargazer.currentUserLogin}'s Starred Repos` : 'Stargazer List';
  }

  render() {
    return <>
      <Title>{this.title}</Title>
      <Container>
        <UnstyledList>
          <li><Link to={formatRoute(Routes.STARGAZER)}>List</Link></li>
          <li><Link to={formatRoute(Routes.STARGAZER_SEARCH)}>Search</Link></li>
        </UnstyledList>
        <Switch>
          <Route path={Routes.STARGAZER_SEARCH} exact component={StargazerSearch}/>
          <Route path={Routes.STARGAZER} component={StargazerList}/>
        </Switch>
      </Container>
    </>;
  }
}

const Container = styled.div`
`;

function mapStateToProps(state) {
  return {
    stargazer: state.stargazer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Stargazer);
