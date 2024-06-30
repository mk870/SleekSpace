import { createSlice } from "@reduxjs/toolkit";

export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: {
    value: "",
  },
  reducers: {
    updateAccessToken: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { updateAccessToken } = accessTokenSlice.actions;
export default accessTokenSlice.reducer;
