
import { configureStore } from '@reduxjs/toolkit'
import contentSlice from '../Component/features/apiThunkSlice'
import userApiSlice from '../Component/features/userApiSlice'

export const store = configureStore({
  reducer: {
    content: contentSlice,
    user:userApiSlice
  },
})

