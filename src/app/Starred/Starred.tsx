import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

class Starred extends React.Component {
  render() {
    return <Container>
      <Title>Starred Repos</Title>
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Starred);
