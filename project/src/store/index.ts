import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './reducer';
import { createApi } from '../services/api';

const Api = createApi();

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      thunk: {
        extraArgument: Api
      }
    }
  )
});
