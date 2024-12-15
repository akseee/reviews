import { combineReducers, configureStore } from "@reduxjs/toolkit"

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux"
import setupFormReducer from "./reviewSlice"
import createSagaMiddleware from "redux-saga"
import { watchFetchReviews } from "./saga"

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
  form: setupFormReducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(watchFetchReviews)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useDispatch: () => AppDispatch = () => dispatchHook()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook

export default store
