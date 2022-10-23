const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  categoryList: [],
};
const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
  },
});

export const { setCategoryList } = categorySlice.actions;
export default categorySlice.reducer;
