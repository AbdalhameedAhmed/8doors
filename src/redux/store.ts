import { configureStore } from "@reduxjs/toolkit";
import { redLogin } from "./services/clinic/auth";
import { addClinic } from "./services/clinic/addAndGetClinics";

import authSlice from "redux/slices/clinic/authSlice"
const store = configureStore({
  reducer: {
    [redLogin.reducerPath]: redLogin.reducer,
    users: authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redLogin.middleware,addClinic.middleware), // add middleware
});

export default store;