import * as React from 'react';

// import './App.pcss';

interface IProps {
  version: number;
}

interface IState {
  yourName: string;
}

export class App extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      yourName: '',
    };
  }

  private get yourName(): string {
    return this.state.yourName === '' ? 'Unknown Name' : this.state.yourName;
  }

  public render() {
    return (
      <div className='app'>
        <p className='your-name'>{this.yourName}</p>
        <label>
          Enter Your Name:
          <input type='text'
                 placeholder='Enter Your Name'
                 onChange={(e) => this.setState({ yourName: e.target.value })}
          />
        </label>
        <p>
          <small className='version'>Version: {this.props.version}</small>
        </p>
      </div>
    );
  }
}
