import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { authReducer } from './auth';
import { storage } from '@/storage';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware(getDefaultMiddleware) {
    const defaultMiddlewareOptions = {
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    };

    return getDefaultMiddleware(defaultMiddlewareOptions);
  },
});

export const persistor = persistStore(store);
