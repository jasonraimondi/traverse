import * as React from 'react';
import styled from 'styled-components';

import { Icon } from '@/renderer/app/TrendingRepos/components/LanguageListPicker';
import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import { UserEntity } from '@/renderer/model/User.entity';

interface Props {
  isLocked: boolean;
  user: UserEntity;

  handleClickStargazer(): void;

  handleRemoveStargazer(): void;
}

export class StargazerDetail extends React.Component<Props> {
  readonly iconClear = require('@/assets/icons/icon-close-circle.svg');

  render() {
    const {user} = this.props;
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
                       className={this.props.isLocked ? 'hidden' : null}
                       title='All Languages'
                       dangerouslySetInnerHTML={{__html: this.iconClear}}
            />
          </Name>
          <p>
            {user.attributes.location}
            <br/>{user.attributes.company}
            <br/>{user.attributes.email}
          </p>
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
   width: ${themeConfig.sizes.sidebarWidth}px;
   height: ${themeConfig.sizes.sidebarWidth}px;
`;
