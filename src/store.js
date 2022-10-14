import { configureStore } from '@reduxjs/toolkit'
import usersReucer from './fatures/users/userSlice'


export const store = configureStore({
  reducer: {
    users: usersReucer
  },
})