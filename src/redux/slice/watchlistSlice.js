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
    removeFromWatchlist: (state, action) => {
      let index = state.watchlist.findIndex((course) => {
        return course.maKhoaHoc == action.payload;
      });

      state.watchlist.splice(index, 1);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
