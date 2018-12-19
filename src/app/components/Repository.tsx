import * as React from 'react';

import { RepositoryEntity } from '@/models/Repository.entity';
import styled from 'styled-components';

interface InferProps {
  repository: RepositoryEntity;
}

const Name = styled.p`
`;
const NameLink = styled.a`
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;
`;
const Language = styled.p`
  font-size: 0.8rem;
`;
const Description = styled.p`
`;
const ForksCount = styled.p`
`;
const WatchersCount = styled.p`
`;
const StargazersCount = styled.p`
`;
const Item = styled.li`
  padding: 0 15px;
  border-bottom: 1px solid black;
`;
const ItemHeader = styled.header`
`;
const ItemBody = styled.article`
`;
const ItemFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export class Repository extends React.Component<InferProps> {
  public get attributes() {
    return this.props.repository.attributes;
  }

  public get longName() {
    const longName = this.attributes ? this.attributes.longName : 'Unknown';
    return <Name>{longName.replace('/', ' / ')}</Name>;
  }

  public get language() {
    const language = this.attributes && this.attributes.language !== null ? this.attributes.language : 'Unknown';
    return <Language>{language}</Language>;
  }

  public get description() {
    const description = this.attributes ? this.attributes.description : false;
    if (description) {
      return <Description>{description}</Description>;
    }
    return null;
  }

  public get forksCount() {
    const forksCount = this.attributes ? this.attributes.forksCount : false;
    return <ForksCount>Forks: {forksCount}</ForksCount>;
  }

  public get watchersCount() {
    const watchersCount = this.attributes ? this.attributes.watchersCount : false;
    return <WatchersCount>Watchers: {watchersCount}</WatchersCount>;
  }

  public get stargazersCount() {
    const stargazersCount = this.attributes ? this.attributes.stargazersCount : false;
    return <StargazersCount>Stargazers: {stargazersCount}</StargazersCount>;
  }

  public get htmlUrl() {
    return this.attributes ? this.attributes.htmlUrl : null;
  }

  public render() {
    return (
      <Item>
        <ItemHeader>
          <NameLink href={this.htmlUrl} className='open-link-externally'>
            {this.longName}
          </NameLink>
          {this.language}
        </ItemHeader>
        <ItemBody>
          {this.description}
        </ItemBody>
        <ItemFooter>
          {this.forksCount}
          {this.stargazersCount}
          {this.watchersCount}
        </ItemFooter>
      </Item>
    );
  }
}
