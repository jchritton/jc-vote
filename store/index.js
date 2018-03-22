import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const configStore = ({ initialState, customMiddleware = [] } = {}) => {
  const checkDevTools =
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

  const middleware = [...customMiddleware, sagaMiddleware, createLogger()];

  const composeEnhancers = checkDevTools || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
};

export default configStore;
