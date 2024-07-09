import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./Slices/UserSlice/User";
import { accessTokenSlice } from "./Slices/AccessTokenSlice/AccessToken";
import { themeSlice } from "./Slices/Theme/Theme";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    accessToken: accessTokenSlice.reducer,
    theme: themeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
