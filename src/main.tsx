import './css/style.pcss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app/App';

ReactDOM.render(
  <App version={1.0}/>,
  document.getElementById('app-root'),
);
