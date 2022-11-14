import { localServ } from "../../services/localService";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: localServ.user.get(),
  isUpdate: false,
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.user = action.payload;
    },
    setUpdateUser: (state, action) => {
      state.isUpdate = !state.isUpdate;
    },
  },
});

export const { setUserInfor, setUpdateUser } = userSlice.actions;
export default userSlice.reducer;
