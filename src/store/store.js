import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./slices/catalogSlice";

export default configureStore({
  reducer: {
    catalog: catalogReducer
  }
})