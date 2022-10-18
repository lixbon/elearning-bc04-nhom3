const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  watchlist: [],
};
const watchlistSlice = createSlice({
  name: "watchlistSlice",
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      state.watchlist.push(action.payload);
    },
  },
});

export const { addToWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
