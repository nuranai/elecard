import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  elements: [],
  loading: false,
  error: null
}

export const fetchCatalog = createAsyncThunk('catalog/fetchCatalog', async () => {
  try {
    const response = await fetch('http://contest.elecard.ru/frontend_data/catalog.json')
    const data = await response.json()
    return data
  } catch (error) {
    throw Error(error)
  }
})

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.pending, (state, action) => {
      state.loading = true
      state.error = null
    })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.elements = action.payload
        state.loading = false
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default catalogSlice.reducer