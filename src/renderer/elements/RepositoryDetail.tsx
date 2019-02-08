import * as React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { RepositoryList } from '@/renderer/elements/RepositoryList';
import { RepositoryEntity } from '@/renderer/infrastructure/model/Repository.entity';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

interface Props {
  handleStarRepository(repository: RepositoryEntity): void;
  handleStargazerClick(): void;
  repository: RepositoryEntity;
}

export class RepositoryDetail extends React.Component<Props> {
  get attributes() {
    return this.repository.attributes;
  }

  get repository() {
    return this.props.repository;
  }

  get stargazerLink() {
    const login = this.attributes && this.attributes.owner && this.attributes.owner.login
      ? this.attributes.owner.login : 'Unknown';
    return <Name className='stargazerLink'>{login.replace('/', ' / ')}</Name>;
  }

  get name() {
    const name = this.attributes && this.attributes.name ? this.attributes.name : 'Unknown';
    return <Name className='name'>{name}</Name>;
  }

  get language() {
    const language = this.attributes && this.attributes.language ? this.attributes.language : 'Unknown';
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
    const forksCount = this.attributes && this.attributes.forksCount ? this.attributes.forksCount : 0;
    const title = `${forksCount} Forks`;
    return <ForksCount title={title} className='forks-count'>
      <MiniIcon dangerouslySetInnerHTML={{ __html: RepositoryList.FORKS_ICON }}/>
      {forksCount}
    </ForksCount>;
  }

  get watchersCount() {
    const watchersCount = this.attributes && this.attributes.watchersCount ? this.attributes.watchersCount : 0;
    const title = `${watchersCount} Watchers`;
    return <WatchersCount title={title} className='watchers-count'>
      <MiniIcon dangerouslySetInnerHTML={{ __html: RepositoryList.WATCHERS_ICON }} />
      {watchersCount}
    </WatchersCount>;
  }

  get stargazersCount() {
    const stargazersCount = this.attributes && this.attributes.stargazersCount ? this.attributes.stargazersCount : 0;
    const title = `${stargazersCount} Stargazers`;
    return <StargazersCount title={title} className='stargazers-count'>
      <MiniIcon dangerouslySetInnerHTML={{ __html: RepositoryList.STARGAZERS_ICON }} />
      {stargazersCount}
    </StargazersCount>;
  }

  get htmlUrl() {
    return this.attributes && this.attributes.htmlUrl ? this.attributes.htmlUrl : null;
  }

  render() {
    const title = `Is ${this.repository.isUser ? 'User' : 'Organization'}`;
    return (
      <Item className='repository-list-item'>
        <ItemHeader>
          <Links>
            {false && this.repository.isUser ? (
              <StargazerLink title={title} onClick={this.props.handleStargazerClick}>
                {this.stargazerLink}
              </StargazerLink>
            ) : (
              <DisabledStargazerLink title={title}>
                {this.stargazerLink}
              </DisabledStargazerLink>
            )}
            &nbsp;/&nbsp;
            <NameLink href={this.htmlUrl} className='open-link-externally'>
              {this.name}
            </NameLink>
            <span onClick={() => this.props.handleStarRepository(this.repository)}>STARME</span>
          </Links>
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

const Links = styled.div`
  display: flex;
`;

const NameLink = styled.a`
  cursor: pointer;
  font-weight: 600;
  color: ${themeConfig.colors.purple};
  text-decoration: none;
  &:hover {
    color: ${themeConfig.colors.purpleDark}
    text-decoration: underline;
  }
`;

const DisabledStargazerLink = styled(NameLink)`
  cursor: unset;
  color: ${themeConfig.colors.purple};
  &:hover {
    color: ${themeConfig.colors.purple};
    text-decoration: none;
  }
`;

const StargazerLink = styled(NameLink)`
`;

const Language = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
  color: ${themeConfig.colors.greyDarker}
`;
const Description = styled.p`
  overflow: hidden;
  max-height: ${themeConfig.sizes.sidebarWidth}px;
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
  background-color: ${themeConfig.colors.greyLightest};
  border-bottom: 1px solid ${themeConfig.colors.black};
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
    fill: ${themeConfig.colors.greenDarker};
  }
  & svg .secondary {
    fill: ${themeConfig.colors.green};
  }
`;
