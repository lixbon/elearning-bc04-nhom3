import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/slice/userSlice";
import watchlistSlice from "./redux/slice/watchlistSlice";
import darkModeSlice from "./redux/slice/darkModeSlice";
import messageSlice from "./redux/slice/messageSlice";
import categorySlice from "./redux/slice/categorySlice";

const store = configureStore({
  reducer: {
    userSlice,
    watchlistSlice,
    darkModeSlice,
    messageSlice,
    categorySlice,
  },
  devTools: true,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
