import * as React from 'react';
import styled from 'styled-components';

export class EmptyStargazerRepositoryList extends React.Component {
  render() {
    return (
      <EmptyContainer>
        <h4>
          I didn't find any starred repos trending for that user.
        </h4>
      </EmptyContainer>
    );
  }
}

const EmptyContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
`;
