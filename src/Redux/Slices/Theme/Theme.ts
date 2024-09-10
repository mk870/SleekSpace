import { createSlice } from "@reduxjs/toolkit";

const theme: "light" | "dark" = "light";
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: theme,
  },
  reducers: {
    switchTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
