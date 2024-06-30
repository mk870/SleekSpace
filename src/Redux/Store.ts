import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./Slices/UserSlice/User";
import { accessTokenSlice } from "./Slices/AccessTokenSlice/AccessToken";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    accessToken: accessTokenSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
