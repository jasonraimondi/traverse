import { FlashMessages } from '@/app/FlashMessage/FlashMessages';
import { rootReducer } from '@/infrastructure/redux/Reducer';
import rootSaga from '@/infrastructure/redux/Saga';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'reflect-metadata';

import App from '@/app/App';
import { openLinkExternally } from '@/electron/OpenLinkExternally';
import { composeEnhancers } from '@/environment';
import { loadStateFromElectronSettings, saveStateToElectronSettings } from '@/infrastructure/redux/StateToLocalStorage';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  Object.assign({}, loadStateFromElectronSettings()),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

store.subscribe(() => {
  saveStateToElectronSettings({
    trendingRepositoryList: store.getState().trendingRepositoryList,
    // stargazerRepositoryList: store.getState().stargazerRepositoryList,
    // accessToken: store.getState().accessToken,
  });
});

sagaMiddleware.run(rootSaga);

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
