import * as React from 'react';

import { UserEntity } from '@/models/User.entity';

interface Props {
  stargazerList: { [id: number]: UserEntity };
}

export class StargazerList extends React.Component<Props> {
  get stargazerList() {
    return Object.values(this.props.stargazerList)
      .map((user) => <div>{user.attributes.name}</div>);
  }
  render() {
    return this.stargazerList.length ? this.stargazerList : (
      <div>You haven't added any Stargazers, why not add one?</div>
    );
  }
}
