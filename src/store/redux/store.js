// src/store/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import playlistReducer from './playlistSlice'

export const store = configureStore({
  reducer: {
    playlists: playlistReducer,
  },
})
