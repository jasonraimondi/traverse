import { UserEntity } from '@/renderer/model/User.entity';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  user: UserEntity;
}

export class UserProfile extends React.Component<Props> {
  get user() {
    return this.props.user;
  }

  render() {
    return <Container>
      <Avatar>
        <AvatarImage src={this.user.attributes.avatarUrl}
                     alt={`Avatar image for ${this.user.attributes.name}.`}
        />
      </Avatar>
      <Detail>
        <Name>{this.user.attributes.name}</Name>
        <Info>
          {this.user.attributes.location}
          <br/>{this.user.attributes.login}
          <br/>{this.user.attributes.email}
        </Info>
      </Detail>
    </Container>;
  }
}

const Name = styled.h4`
  margin-bottom: 0.5rem;
`;

const Info = styled.p`
  line-height: 1.4;
`;

const Detail = styled.div`
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0 0;
`;

const Avatar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AvatarImage = styled.img`
  border-radius: 999px;
  max-width: 100%;
  max-height: 100%;
  height: 150px;
`;
