import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    todoList:todoSlice
  });

const persistConfig = {
    key: 'root',
    storage
  };
  
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch