import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { Login } from 'redux/services/clinic/auth';
import { Otp } from './services/clinic/otp';
import { addClinic, getClinics } from 'redux/services/clinic/addAndGetClinics';
import { signup } from 'redux/services/signup';
import { deleteClinic } from 'redux/services/clinic/deleteClinic';
import { updateClinic } from 'redux/services/clinic/updateClinic';
import { changePassword } from 'redux/services/clinic/changePassword';
import { getBloodGroups } from './services/lookup/getBloodGroup';
import { getCountries } from './services/lookup/getAllCountries';
import { getStates } from './services/lookup/getStates';
import { getCities } from './services/lookup/getCities';
import activeClinicReducer from 'redux/slices/clinic/activeClinic';
import userRegisterInfoReducer from 'redux/slices/landing/userRegisterInfo';
import authReducer from 'redux/slices/auth';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [Login.reducerPath]: Login.reducer,
  [Otp.reducerPath]: Otp.reducer,
  [getClinics.reducerPath]: getClinics.reducer,
  [getBloodGroups.reducerPath]: getBloodGroups.reducer,
  [getCountries.reducerPath]: getCountries.reducer,
  auth: authReducer,
  activeClinic: activeClinicReducer,
  userInfo: userRegisterInfoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware: Middleware[] = [
  thunkMiddleware,
  Login.middleware,
  addClinic.middleware,
  getClinics.middleware,
  signup.middleware,
  changePassword.middleware,
  deleteClinic.middleware,
  updateClinic.middleware,
  Otp.middleware,
  getBloodGroups.middleware,
  getCountries.middleware,
  getStates.middleware,
  getCities.middleware
];
const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,

  // add middleware
});

export default store;
export const persistor = persistStore(store);
export type rootState = ReturnType<typeof persistedReducer>;
