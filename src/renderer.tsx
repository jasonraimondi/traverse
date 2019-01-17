import { FlashMessages } from '@/app/FlashMessage/FlashMessages';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'reflect-metadata';

import App from '@/app/App';
import { openLinkExternally } from '@/electron/OpenLinkExternally';
import { composeEnhancers } from '@/environment';
import { rootReducer } from '@/infrastructure/redux/reducers/rootReducer';
import sagas from '@/infrastructure/redux/sagas/rootSaga';
import { loadStateFromElectronSettings, saveStateToElectronSettings } from '@/infrastructure/redux/StateToLocalStorage';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  Object.assign({}, loadStateFromElectronSettings()),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

store.subscribe(() => {
  saveStateToElectronSettings({
    stargazerList: store.getState().stargazerList,
    language: store.getState().language,
    frequency: store.getState().frequency,
    languageListType: store.getState().languageListType,
    githubAccessToken: store.getState().githubAccessToken,
  });
});

sagaMiddleware.run(sagas);

document.addEventListener('click', openLinkExternally, false);

export default ReactDOM.render(
  <Provider store={store}>
    <>
      <FlashMessages/>
      <App/>
    </>
  </Provider>,
  document.getElementById('app-root'),
);
