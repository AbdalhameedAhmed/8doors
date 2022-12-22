//@ts-ignore
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import accountReducer from './reducers/accountReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['account'],
};

const reducers = combineReducers({
  account: accountReducer,
});

const PersistReducer = persistReducer(persistConfig, reducers);

export default PersistReducer;
