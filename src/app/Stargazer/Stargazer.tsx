import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { StargazerList } from '@/app/Stargazer/StargazerList/StargazerList';
import { StargazerSearch } from '@/app/Stargazer/StargazerSearch/StargazerSearch';
import { UserEntity } from '@/models/User.entity';

interface Props {
  match: any;
  currentStargazer: number | null;
  stargazerList: { [id: number]: UserEntity };
}

class Stargazer extends React.Component<Props> {
  render() {
    console.log(this.props.match);
    return <Container>
      <ul>
        <li><Link to={`${this.props.match.url}`}>List</Link></li>
        <li><Link to={`${this.props.match.url}/search`}>Search</Link></li>
        {/*<li><Link to={Routes.STARGAZER_DETAIL.create({ username: 'jasonraimondi' })}>User</Link></li>*/}
      </ul>
      <Switch>
        <Route path={`${this.props.match.path}/search`} component={() => <StargazerSearch/>}/>
        {/*<Route path={Routes.STARGAZER_DETAIL.template()} component={StargazerDetail} />*/}
        <Route path={this.props.match.path}
               component={() => <StargazerList stargazerList={this.props.stargazerList}/>}
        />
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
    {},
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Stargazer);
