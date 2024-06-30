import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./Type/Type";

const user: IUser = {
  email: "",
  firstName: "",
  lastName: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: user,
  },
  reducers: {
    addFirstName: (state, action) => {
      state.value = {
        ...state.value,
        firstName: action.payload,
      };
    },
    addEmailAddress: (state, action) => {
      state.value = {
        ...state.value,
        email: action.payload,
      };
    },
    addLastName: (state, action) => {
      state.value = {
        ...state.value,
        lastName: action.payload,
      };
    },
  },
});
export const { addFirstName, addEmailAddress } = userSlice.actions;
export default userSlice.reducer;
