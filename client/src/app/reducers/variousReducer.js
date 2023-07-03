import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showNavigation: true
}

export const variousReducer = createSlice({
  name: 'various',
  initialState,
  reducers: {
    setShowNavigation: (state, action) => {
      state.showNavigation = action.payload
    },
  },
})

export const { setShowNavigation } = variousReducer.actions

export default variousReducer.reducer