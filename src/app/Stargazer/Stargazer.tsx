import { Routes } from '@/app/Routes';
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import StargazerList from '@/app/Stargazer/StargazerList/StargazerList';
import StargazerSearch from '@/app/Stargazer/StargazerSearch/StargazerSearch';

interface Props {
  match: any;
}

class Stargazer extends React.Component<Props> {
  render() {
    return <Container>
      <ul>
        <li><Link to={Routes.STARGAZER.create({})}>List</Link></li>
        <li><Link to={Routes.STARGAZER_SEARCH.create({})}>Search</Link></li>
      </ul>
      <Switch>
        <Route path={Routes.STARGAZER_SEARCH.template()} exact component={StargazerSearch}/>
        <Route path={Routes.STARGAZER.template()} component={StargazerList}/>
      </Switch>
    </Container>;
  }
}

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;
const Container = styled.div`
  padding: 0.5rem;
`;

function mapStateToProps(state) {
  return {
    currentStargazer: state.currentStargazer,
    stargazerList: state.stargazerList,
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
