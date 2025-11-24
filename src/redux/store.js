import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import apiSlice from './api/apiSlice';
import cartSlice from './slices/cartSlice';
import authSlice from './slices/authSlice';

const cartPersistConfig = {
  key: 'shoopingCart',
  storage,
};

const userPersistConfig = {
  key: 'user',
  storage,
  // whitelist: ['name', 'user_id', 'role', 'email'],
  // backlist: ['token'],
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartSlice);
const persistedUserReducer = persistReducer(userPersistConfig, authSlice);

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: persistedCartReducer,
    user: persistedUserReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);
export default store;
