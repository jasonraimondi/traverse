import * as React from 'react';

import { UserEntity } from '@/models/User.entity';

interface Props {
  stargazerList: { [id: number]: UserEntity };
}

export class StargazerList extends React.Component<Props> {
  render() {
    return Object.values(this.props.stargazerList).map((user) => <div>{user.attributes.name}</div>);
  }
}
