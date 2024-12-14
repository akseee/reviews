import { combineReducers, configureStore } from "@reduxjs/toolkit"

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux"
// import * as burgerApi from '@api';
// import { userSlice } from './slices/user';
// import { ingredientsSlice } from './slices/ingredients';
// import { orderSlice } from './slices/order';
// import { feedSlice } from './slices/feed';
// import { burgerConstructor } from './slices/burgerConstructor';

export const rootReducer = combineReducers({})

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: burgerApi
  //     }
  //   }),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useDispatch: () => AppDispatch = () => dispatchHook()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook

export default store
