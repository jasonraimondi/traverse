import * as React from 'react';

import './App.pcss';
import Frequency from './Frequency';

export class App extends React.Component {
  public render() {
    return (
      <div id='app-container'>
        <div id='app-viewport'>
          Repository List
        </div>
        <div id='app-bottombar'>
          <Frequency/>
        </div>
      </div>
    );
  }
}
