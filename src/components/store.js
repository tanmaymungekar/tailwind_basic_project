import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./flightSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
