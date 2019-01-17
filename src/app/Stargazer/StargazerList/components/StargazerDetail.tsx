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
  render() {
    const { user } = this.props;
    return <>
      <Item onClick={this.props.handleClickStargazer} key={user.id}>
        <Avatar className={`${this.props.shouldGreyscaleImage ? 'add-greyscale' : null} avatar`}
             src={user.attributes.avatarUrl}
             alt={`${user.attributes.login} avatar`}
        />
        <Description>
          <p>{user.attributes.name}</p>
          <p>{user.attributes.login}</p>
          <a onClick={this.props.handleRemoveStargazer}>Remove</a>
        </Description>
      </Item>
    </>;
  }
}

const Item = styled.div`
   display: flex;
`;

const Description = styled.div`
  flex: 1;
`;

const Avatar = styled.img`
   width: ${themeConfig.sizes.sidebarWidth};
   height: ${themeConfig.sizes.sidebarWidth};
`;
