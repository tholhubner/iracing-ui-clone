import { createSlice } from '@reduxjs/toolkit'
import { seriesList } from "../../testData/series"

const initialState = seriesList

export const seriesReducer = createSlice({
  name: 'series',
  initialState,
  reducers: {
		setSeriesMPR: (state, action) => {
			console.log(action.payload)
			const {index, mprValue } = action.payload
			const tempArray = state
			const tempItem = state[index]
			tempItem.mpr = mprValue
			tempArray[index] = tempItem
			state = tempArray
		},
	},
})

export const { setSeriesMPR } = seriesReducer.actions


export default seriesReducer.reducer