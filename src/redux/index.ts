//@ts-ignore
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import PersistReducer from './store';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  middlewares.push(logger);
}

export const store = createStore(PersistReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
