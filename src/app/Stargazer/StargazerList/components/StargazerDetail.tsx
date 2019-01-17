import { Icon } from '@/app/TrendingRepos/components/LanguageListPicker';
import { themeConfig } from '@/infrastructure/styles/Theme';
import { UserEntity } from '@/models/User.entity';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  shouldGreyscaleImage: boolean;
  user: UserEntity;

  handleClickStargazer(): void;

  handleRemoveStargazer(): void;
}

export class StargazerDetail extends React.Component<Props> {
  readonly iconClear = require('@/infrastructure/assets/icons/icon-close-circle.svg');

  render() {
    const { user } = this.props;
    return <>
      <Item>
        <Avatar className={`${this.props.shouldGreyscaleImage ? 'add-greyscale' : null} avatar`}
                onClick={this.props.handleClickStargazer}
                src={user.attributes.avatarUrl}
                alt={`${user.attributes.login} avatar`}
        />
        <Description>
          <Name>
            {user.attributes.name}
            <Icon onClick={this.props.handleRemoveStargazer}
                  title='All Languages'
                  dangerouslySetInnerHTML={{ __html: this.iconClear }}
            />
          </Name>
          <p>{user.attributes.bio}</p>
          <p>{user.attributes.publicRepoCount}</p>
          <p>{user.attributes.publicGistCount}</p>
        </Description>
      </Item>
    </>;
  }
}

const Item = styled.div`
   display: flex;
`;

const Name = styled.h4`
`;

const Description = styled.div`
  flex: 1;
`;

const Avatar = styled.img`
   width: ${themeConfig.sizes.sidebarWidth};
   height: ${themeConfig.sizes.sidebarWidth};
`;
