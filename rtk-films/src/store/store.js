import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // используем localStorage по умолчанию, но можем и другие хранилища

import favoriteMoviesReducer from '../features/movies/favoriteMoviesSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, favoriteMoviesReducer)

const store = configureStore({
  reducer: {
    favoriteMovies: persistedReducer,
  },
})

export const persistor = persistStore(store)
export default store
