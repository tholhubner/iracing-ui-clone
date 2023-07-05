import { createSlice } from '@reduxjs/toolkit'
import { userData } from "../../testData/user"

const initialState = userData

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addSeriesToFavorites: (state, action) => {
			const tempArray = state.favoriteTracks
			tempArray.push(action.payload)
      state.favoriteTracks = tempArray
    },
		removeSeriesFromFavorites: (state, action) => {
			const index = state.favoriteTracks.indexOf(action.payload)
			const tempArray = state.favoriteTracks
			if (index > -1) {
				tempArray.splice(index, 1)
			}
			state.favoriteTracks = tempArray
		}
  },
})

export const { addSeriesToFavorites, removeSeriesFromFavorites } = userReducer.actions

export default userReducer.reducer