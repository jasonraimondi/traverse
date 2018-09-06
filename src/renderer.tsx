import './app/styles/style.pcss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './app/App';
import { composeEnhancers } from './environment';
import { rootReducer } from './infrastructure/redux/reducers/rootReducer';
import sagas from './infrastructure/redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

export default ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app-root'),
);
