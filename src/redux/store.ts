import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import authReducer from 'redux/slices/auth';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware: Middleware[] = [thunkMiddleware];
const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,

  // add middleware
});

export default store;
export const persistor = persistStore(store);
export type rootState = ReturnType<typeof persistedReducer>;
