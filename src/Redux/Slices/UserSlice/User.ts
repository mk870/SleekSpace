import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "./Type/Type";

const user: IUser = {
  email: "mkhue47@gmail.com",
  givenName: "Mkhululi",
  familyName: "Ndlovu",
  avatar: "",
  contactNumber: "0774676397",
  whatsAppNumber: "0774676397",
  location: "Bulawayo, ZW",
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
    addAvatar: (state, action) => {
      state.value = {
        ...state.value,
        avatar: action.payload,
      };
    },
    addWhatsAppNumber: (state, action) => {
      state.value = {
        ...state.value,
        whatsAppNumber: action.payload,
      };
    },
    addContactNumber: (state, action) => {
      state.value = {
        ...state.value,
        contactNumber: action.payload,
      };
    },
    addLocation: (state, action) => {
      state.value = {
        ...state.value,
        location: action.payload,
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
  addContactNumber,
  addLocation,
  addWhatsAppNumber,
} = userSlice.actions;
export default userSlice.reducer;
