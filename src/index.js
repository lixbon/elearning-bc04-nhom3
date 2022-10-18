import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./redux/slice/loadingSlice";
import userSlice from "./redux/slice/userSlice";
import watchlistSlice from "./redux/slice/watchlistSlice";

const store = configureStore({
  reducer: {
    loadingSlice,
    userSlice,
    watchlistSlice,
  },
  devTools: true,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
