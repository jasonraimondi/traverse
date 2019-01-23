import { UserEntity } from '@/models/User.entity';
import { Icon } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  user: UserEntity;
  handleClickStargazer(): void;
  handleRemoveStargazer(): void;
}

export class StargazerDetail extends React.Component<Props> {
  readonly iconClear = require('@/assets/icons/icon-close-circle.svg');

  render() {
    const { user } = this.props;
    return <>
      <Item>
        <Avatar className='avatar'
                onClick={this.props.handleClickStargazer}
                src={user.attributes.avatarUrl}
                alt={`${user.attributes.login} avatar`}
        />
        <Description>
          <Name>
            {user.attributes.name}
            <CloseIcon onClick={this.props.handleRemoveStargazer}
                  title='All Languages'
                  dangerouslySetInnerHTML={{ __html: this.iconClear }}
            />
          </Name>
          {/*<p>{user.attributes.bio}</p>*/}
          <p>{user.attributes.company}</p>
          {/*<p>{user.attributes.publicGistCount}</p>*/}
        </Description>
      </Item>
    </>;
  }
}

const CloseIcon = styled(Icon)`
  float: right;
  & svg {
    cursor: pointer;
  }
  &:hover .primary {
    fill: ${themeConfig.colors['green-darker']};
  }
  &:hover .secondary {
    fill: ${themeConfig.colors.green};
  }
`;

const Item = styled.div`
   display: flex;
`;

const Name = styled.h4`
`;

const Description = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const Avatar = styled.img`
   width: ${themeConfig.sizes.sidebarWidth};
   height: ${themeConfig.sizes.sidebarWidth};
`;
