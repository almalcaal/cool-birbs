import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/api.slice.js";
import authSliceReducer from "./slices/auth.slice.js";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
