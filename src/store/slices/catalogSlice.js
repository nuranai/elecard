import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  elements: JSON.parse(localStorage.elemets ?? '[]'),
  loading: false,
  error: null
}

function saveToLocalStorage(state) {
  localStorage.elemets = JSON.stringify(state)
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
  reducers: {
    sortElements(state, action) {
      state.elements.sort((a, b) => {
        if (a[action.payload.sortType] < b[action.payload.sortType]) { return action.payload.sortDirection === 'ascend' ? -1 : 1 }
        if (a[action.payload.sortType] > b[action.payload.sortType]) { return action.payload.sortDirection === 'ascend' ? 1 : -1 }
        return 0
      }
      )
    },
    deleteElement(state, action) {
      const index = state.elements.findIndex(elem => elem.image === action.payload)
      state.elements.splice(index, 1)
      saveToLocalStorage(state.elements)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCatalog.pending, (state, action) => {
      state.loading = true
      state.error = null
    })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.elements = action.payload
        state.loading = false
        saveToLocalStorage(state.elements)
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default catalogSlice.reducer

export const { sortElements, deleteElement } = catalogSlice.actions