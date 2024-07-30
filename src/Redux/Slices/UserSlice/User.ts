import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./Type/Type";

const user: IUser = {
  email: "",
  givenName: "",
  familyName: "",
  avatar: "",
  contactNumbers: [],
  location: null,
  id: 0,
  accessToken:""
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
    addAvatar: (state, action) => {
      state.value = {
        ...state.value,
        avatar: action.payload,
      };
    },
    addContactNumbers: (state, action) => {
      state.value = {
        ...state.value,
        contactNumbers: action.payload,
      };
    },
    addLocation: (state, action) => {
      state.value = {
        ...state.value,
        location: action.payload,
      };
    },
    addAccessToken: (state, action) => {
      state.value = {
        ...state.value,
        accessToken: action.payload,
      };
    },
  },
});
export const {
  addGivenName,
  addEmailAddress,
  addFamilyName,
  addUserId,
  addAvatar,
  addContactNumbers,
  addLocation,
  addAccessToken
} = userSlice.actions;
export default userSlice.reducer;
