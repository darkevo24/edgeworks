import { configureStore } from '@reduxjs/toolkit'
import varSlice from './varSlice'

export const store = configureStore({
  reducer: {
    var : varSlice
  },
})