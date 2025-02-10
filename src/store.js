import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from './reducers/galleryReducer'

export default configureStore({
  reducer: {
    gallery: galleryReducer
  }
})