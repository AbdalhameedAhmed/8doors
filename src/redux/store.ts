import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore, Middleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { Login } from 'redux/services/clinic/auth';
import { Otp } from './services/patient/otp';
import { resendOtp } from './services/patient/resendOtp';

import { addClinic, getClinics } from 'redux/services/clinic/addAndGetClinics';
import { signup } from 'redux/services/signup';
import { deleteClinic } from 'redux/services/clinic/deleteClinic';
import { updateClinic } from 'redux/services/clinic/updateClinic';
import { changePassword } from 'redux/services/clinic/changePassword';
import { getBloodGroups } from './services/lookup/getBloodGroup';
import { getCountries } from './services/lookup/getAllCountries';
import { getStates } from './services/lookup/getStates';
import { getCities } from './services/lookup/getCities';
import { getProfileData } from './services/patient/getProfileData';
import activeClinicReducer from 'redux/slices/clinic/activeClinic';
import userRegisterInfoReducer from 'redux/slices/landing/userRegisterInfo';
import authReducer from 'redux/slices/auth';
import { profilePic } from './services/patient/profilePic';
import { nationalIdFront } from './services/patient/nationalIdFront';
import { nationalIdBack } from './services/patient/nationalIdBack';
import { getNationalIdData } from './services/patient/getNationalIdData';
import { updatePatientData } from './services/patient/updatePatientData';
import { changePhoneNubmerInit } from './services/patient/changePhoneNumberInit';
import { changePhoneNubmerFinish } from './services/patient/changePhoneNumberFinish';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  [Login.reducerPath]: Login.reducer,
  [Otp.reducerPath]: Otp.reducer,
  [resendOtp.reducerPath]: resendOtp.reducer,
  [getClinics.reducerPath]: getClinics.reducer,
  [getBloodGroups.reducerPath]: getBloodGroups.reducer,
  [getCountries.reducerPath]: getCountries.reducer,
  [getStates.reducerPath]: getStates.reducer,
  [getCities.reducerPath]: getCities.reducer,
  [profilePic.reducerPath]: profilePic.reducer,
  [getProfileData.reducerPath]: getProfileData.reducer,
  [nationalIdFront.reducerPath]: nationalIdFront.reducer,
  [nationalIdBack.reducerPath]: nationalIdBack.reducer,
  [getNationalIdData.reducerPath]: getNationalIdData.reducer,
  [updatePatientData.reducerPath]: updatePatientData.reducer,
  [changePhoneNubmerInit.reducerPath]:changePhoneNubmerInit.reducer,
  [changePhoneNubmerFinish.reducerPath]:changePhoneNubmerFinish.reducer,
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
  resendOtp.middleware,
  getBloodGroups.middleware,
  getCountries.middleware,
  getStates.middleware,
  getCities.middleware,
  profilePic.middleware,
  getProfileData.middleware,
  nationalIdFront.middleware,
  nationalIdBack.middleware,
  getNationalIdData.middleware,
  updatePatientData.middleware,
  changePhoneNubmerInit.middleware,
  changePhoneNubmerFinish.middleware
];
const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,

  // add middleware
});

export default store;
export const persistor = persistStore(store);
export type rootState = ReturnType<typeof persistedReducer>;
