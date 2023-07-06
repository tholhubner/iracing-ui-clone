import { applyMiddleware, configureStore } from "@reduxjs/toolkit"
import variousReducer from "./reducers/variousReducer"
import userReducer from "./reducers/userReducer"
import seriesReducer from "./reducers/seriesReducer"
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction"

export const store = configureStore({
  reducer: {
		various: variousReducer,
		user: userReducer,
		series: seriesReducer,
	},
})