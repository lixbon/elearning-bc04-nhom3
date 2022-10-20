const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isdarkMode: true,
};
const darkModeSlice = createSlice({
  name: "darkModeSlice",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.isdarkMode = !state.isdarkMode;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
