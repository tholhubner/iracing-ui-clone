import { configureStore } from "@reduxjs/toolkit"
import variousReducer from "./reducers/variousReducer"
import userReducer from "./reducers/userReducer"

export const store = configureStore({
  reducer: {
		various: variousReducer,
		user: userReducer
	},
})