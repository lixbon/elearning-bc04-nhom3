const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
};
const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoadingON: (state, action) => {
      state.isLoading = true;
    },
    setLoadingOFF: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { setLoadingON, setLoadingOFF } = loadingSlice.actions;
export default loadingSlice.reducer;
