import { compose } from 'redux';

export const IS_DEV_ENV = process.env.NODE_ENV !== 'production';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

function fetchComposeEnhancers() {
  let compEnhancers = compose;

  if (IS_DEV_ENV) {
    console.log('is dev');
    compEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  }

  return compEnhancers;
}

export const composeEnhancers = fetchComposeEnhancers();
