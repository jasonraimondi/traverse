import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from '@/app/App';
import { FlashMessages } from '@/app/elements/FlashMessages';
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
    language: store.getState().language,
    frequency: store.getState().frequency,
    languageListType: store.getState().languageListType,
    githubAccessToken: store.getState().githubAccessToken,
  });
});

sagaMiddleware.run(sagas);

export default ReactDOM.render(
  <Provider store={store}>
    <>
      <FlashMessages/>
      <App/>
    </>
  </Provider>,
  document.getElementById('app-root'),
);

document.addEventListener('click', openLinkExternally, false);
