import { configureStore } from "@reduxjs/toolkit";
import { petApi } from "./services/clinic";

const store = configureStore({
  reducer: {
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware), // add middleware
});

export default store;