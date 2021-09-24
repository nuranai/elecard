import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  cardElements: JSON.parse(localStorage.elemets ?? '[]'),
  elements: [],
  loading: false,
  error: null,
  categories: []
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
    sortCards(state, action) {
      state.cardElements.sort((a, b) => {
        if (a[action.payload.sortType] < b[action.payload.sortType]) return action.payload.sortDirection === 'ascend' ? -1 : 1
        if (a[action.payload.sortType] > b[action.payload.sortType]) return action.payload.sortDirection === 'ascend' ? 1 : -1
        return 0
      }
      )
    },
    deleteCard(state, action) {
      const index = state.cardElements.findIndex(elem => elem.image === action.payload)
      state.cardElements.splice(index, 1)
      saveToLocalStorage(state.cardElements)
    },
    resetCards(state, action) {
      state.cardElements = state.elements
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
        if (!state.cardElements[0]) state.cardElements = state.elements
        state.categories = Array.from(action.payload.reduce((acc, val) => acc.add(val.category), new Set()))
      })
      .addCase(fetchCatalog.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default catalogSlice.reducer

export const { sortCards, deleteCard, resetCards } = catalogSlice.actions