import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import apiSlice from './api/apiSlice';
import cartSlice from './slices/cartSlice';

const persistConfig = {
  key: 'shoopingCart',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: persistedReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
export default store;
