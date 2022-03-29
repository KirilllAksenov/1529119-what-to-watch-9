import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../API/api';
import { reducer } from './reducer';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

