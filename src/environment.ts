import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';
import { compose } from 'redux';

export const IS_MAC_OS = process.platform === 'darwin';

export const IS_DEV_ENV = process.env.NODE_ENV !== 'production';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

function fetchComposeEnhancers() {
  let compEnhancers = compose;

  if (IS_DEV_ENV) {
    installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
    compEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  }

  return compEnhancers;
}

export const composeEnhancers = fetchComposeEnhancers();
