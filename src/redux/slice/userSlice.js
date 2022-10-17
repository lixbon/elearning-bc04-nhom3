import { localServ } from "../../services/localService";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  // user: localServ.user.get(),
  user: {
    hoTen: "fakeTest",
  },
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfor: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserInfor } = userSlice.actions;
export default userSlice.reducer;
