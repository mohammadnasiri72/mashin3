import { configureStore } from '@reduxjs/toolkit'
import settingReducer from '../redux/slice/setting'

export const store = configureStore({
  reducer: {
    setting : settingReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})