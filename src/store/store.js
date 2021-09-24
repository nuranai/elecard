import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./slices/catalogSlice";
import viewReducer from './slices/viewSLice'

export default configureStore({
  reducer: {
    catalog: catalogReducer,
    view: viewReducer
  }
})