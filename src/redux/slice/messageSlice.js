const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isMessageOn: false,
  message: "",
};
const messageSlice = createSlice({
  name: "messageSlice",
  initialState,
  reducers: {
    setMessageOn: (state, action) => {
      state.isMessageOn = true;
      state.message = action.payload;
    },
    setMessageOff: (state, action) => {
      state.isMessageOn = false;
      state.message = "";
    },
  },
});

export const { setMessageOn, setMessageOff } = messageSlice.actions;
export default messageSlice.reducer;
