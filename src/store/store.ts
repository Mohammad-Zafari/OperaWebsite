// src/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../slices/MainSlice'; // Adjust the path if necessary

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
