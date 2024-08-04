// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
// import mainReducer from '../slices/MainSlice'; // Adjust path if needed
import navbarReducer from "../slices/NavabarSlice";
import contactReducer from "../slices/contactSlice"
const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
