import * as React from 'react';

interface IProps {
  list: { [id: string]: any };
}

export class RepositoryList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  get listItems() {
    return Object.values(this.props.list).map((repository) => {
      return <li key={repository.toString().toLowerCase()}>{repository}</li>;
    });
  }

  public render() {
    return (
      <ul id='repository-list'>
        {this.listItems}
      </ul>
    );
  }
}
