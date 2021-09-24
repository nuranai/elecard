import { createSlice } from "@reduxjs/toolkit";

const initialState = 'card'

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    changeView(state, action) {
      state = action.payload
      return state
    }
  }
})

export default viewSlice.reducer

export const { changeView } = viewSlice.actions