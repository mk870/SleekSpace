import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./Type/Type";

const user: IUser = {
  email: "",
  givenName: "",
  familyName: "",
  id: 0,
};
export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: user,
  },
  reducers: {
    addGivenName: (state, action) => {
      state.value = {
        ...state.value,
        givenName: action.payload,
      };
    },
    addEmailAddress: (state, action) => {
      state.value = {
        ...state.value,
        email: action.payload,
      };
    },
    addFamilyName: (state, action) => {
      state.value = {
        ...state.value,
        familyName: action.payload,
      };
    },
    addUserId: (state, action) => {
      state.value = {
        ...state.value,
        id: action.payload,
      };
    },
  },
});
export const { addGivenName, addEmailAddress, addFamilyName, addUserId } =
  userSlice.actions;
export default userSlice.reducer;
