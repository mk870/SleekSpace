import { IManagerAccount } from "@/src/GlobalTypes/Types";
import { createSlice } from "@reduxjs/toolkit";

const managerAccount: IManagerAccount = {
  name: "Mkh Agency",
  email: "mkhue47@gmail.com",
  id: 0,
  userId: 0,
  avatar:"",
  contacts: [],
};
export const managerAccountSlice = createSlice({
  name: "managerAccount",
  initialState: {
    value: managerAccount,
  },
  reducers: {
    addManagerAccount: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addManagerAccount } = managerAccountSlice.actions;
export default managerAccountSlice.reducer;