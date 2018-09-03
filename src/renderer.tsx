import './app/styles/style.pcss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from './app/App';
import { composeEnhancers } from './environment';
import { rootReducer } from './infrastructure/redux/reducers/rootReducer';

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(),
);

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('app-root'),
);
