import { configureStore } from "@reduxjs/toolkit";
import { petApi } from "./services/clinic";
import authSlice from "redux/slices/clinic/authSlice"
const store = configureStore({
  reducer: {
    [petApi.reducerPath]: petApi.reducer,
    users: authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware), // add middleware
});

export default store;