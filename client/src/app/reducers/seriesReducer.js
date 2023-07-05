import { createSlice } from '@reduxjs/toolkit'
import { seriesList } from "../../testData/series"

const initialState = seriesList

export const seriesReducer = createSlice({
  name: 'series',
  initialState,
  reducers: {
  },
})

export const { } = seriesReducer.actions

export default seriesReducer.reducer