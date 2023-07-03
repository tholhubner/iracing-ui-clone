import { configureStore } from "@reduxjs/toolkit"
import variousReducer from "./reducers/variousReducer"

export const store = configureStore({
  reducer: {
		various: variousReducer
	},
})