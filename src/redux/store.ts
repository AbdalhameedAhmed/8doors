import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Login } from "./services/clinic/auth";
import { signup } from "redux/services/signup";
import { addClinic,getClinics } from "./services/clinic/addAndGetClinics";
import { deleteClinic } from "./services/clinic/deleteClinic";
import { updateClinic } from "./services/clinic/updateClinic";
import { changePassword } from "./services/clinic/changePassword";
import activeClinicReducer from "./slices/clinic/activeClinic"
import authReducer from "./slices/auth"

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  [Login.reducerPath]: Login.reducer,
    [getClinics.reducerPath]:getClinics.reducer,
    auth:authReducer,
    activeClinic:activeClinicReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [thunkMiddleware, Login.middleware, addClinic.middleware, getClinics.middleware, signup.middleware, changePassword.middleware, deleteClinic.middleware,updateClinic.middleware]
const store = configureStore({
  reducer: persistedReducer ,
  middleware: middleware
  
     // add middleware
});

export default store;
export const persistor = persistStore(store)