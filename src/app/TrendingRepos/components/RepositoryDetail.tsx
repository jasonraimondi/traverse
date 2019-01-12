import * as React from 'react';
import styled from 'styled-components';

import { RepositoryList } from '@/app/TrendingRepos/components/RepositoryList';
import { theme } from '@/infrastructure/styles/Theme';
import { RepositoryEntity } from '@/models/Repository.entity';

interface InferProps {
  repository: RepositoryEntity;
}

export class RepositoryDetail extends React.Component<InferProps> {
  get attributes() {
    return this.props.repository.attributes;
  }

  get longName() {
    const longName = this.attributes ? this.attributes.longName : 'Unknown';
    return <Name className='name'>{longName.replace('/', ' / ')}</Name>;
  }

  get language() {
    const language = this.attributes && this.attributes.language !== null ? this.attributes.language : 'Unknown';
    return <Language className='language'>{language}</Language>;
  }

  get description() {
    const description = this.attributes ? this.attributes.description : false;
    if (description) {
      return <Description className='description'>{description}</Description>;
    }
    return null;
  }

  get forksCount() {
    const forksCount = this.attributes ? this.attributes.forksCount : false;
    const title = `${forksCount} Forks`;
    return <ForksCount title={title} className='forks-count'>
      <MiniIcon dangerouslySetInnerHTML={{ __html: RepositoryList.FORKS_ICON }}/>
      {forksCount}
    </ForksCount>;
  }

  get watchersCount() {
    const watchersCount = this.attributes ? this.attributes.watchersCount : false;
    const title = `${watchersCount} Watchers`;
    return <WatchersCount title={title} className='watchers-count'>
      <MiniIcon dangerouslySetInnerHTML={{ __html: RepositoryList.WATCHERS_ICON }} />
      {watchersCount}
    </WatchersCount>;
  }

  get stargazersCount() {
    const stargazersCount = this.attributes ? this.attributes.stargazersCount : false;
    const title = `${stargazersCount} Stargazers`;
    return <StargazersCount title={title} className='stargazers-count'>
      <MiniIcon dangerouslySetInnerHTML={{ __html: RepositoryList.STARGAZERS_ICON }} />
      {stargazersCount}
    </StargazersCount>;
  }

  get htmlUrl() {
    return this.attributes ? this.attributes.htmlUrl : null;
  }

  render() {
    return (
      <Item className='repository-list-item'>
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

const Name = styled.p`
`;
const NameLink = styled.a`
  font-weight: 600;
  color: ${theme.colors.purple};
  text-decoration: none;
  &:hover {
    color: ${theme.colors['purple-dark']}
    text-decoration: underline;
  }
`;
const Language = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  color: ${theme.colors['grey-darker']}
`;
const Description = styled.p`
`;
const Bottom = styled.p`
  font-weight: 600;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
`;
const ForksCount = styled(Bottom)`
`;
const WatchersCount = styled(Bottom)`
`;
const StargazersCount = styled(Bottom)`
`;
const Item = styled.li`
  padding: 0.5rem 1.25rem 0.5rem 1rem;
  background-color: ${theme.colors['grey-lightest']};
  border-bottom: 1px solid ${theme.colors.black};
`;
const ItemHeader = styled.header`
`;
const ItemBody = styled.article`
`;
const ItemFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;
const MiniIcon = styled.span`
  margin-right: 0.25rem;
  & svg {
    width: 1rem;
    height: 1rem;
  }
  & svg .primary {
    fill: ${theme.colors['green-darker']};
  }
  & svg .secondary {
    fill: ${theme.colors.green};
  }
`;
