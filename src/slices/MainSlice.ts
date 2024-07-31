// src/slices/MainSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface MainState {
//   showModal: boolean;
//   userName: string;
//   userAge: number;
// }

// const initialState: MainState = {
//   showModal: false,
//   userName: '',
//   userAge: 0,
// };

// const mainSlice = createSlice({
//   name: 'main',
//   initialState,
//   reducers: {
//     toggleModal: (state) => {
//       state.showModal = !state.showModal;
//       console.log('Modal toggled:', state.showModal);
//     },
//     RsetUserName: (state, action: PayloadAction<string>) => {
//       state.userName = action.payload;
//       console.log('User name set:', state.userName);
//     },
//     RsetUserAge: (state, action: PayloadAction<number>) => {
//       state.userAge = action.payload;
//       console.log('User age set:', state.userAge);
//     },
//   },
// });

// export const { toggleModal, RsetUserName, RsetUserAge } = mainSlice.actions;
// export default mainSlice.reducer;
// src/features/main/mainSlice.ts

import { RootState } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MainState {
  token: string | null;
}

const initialState: MainState = {
  token: null,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    RsetToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    
  },
});

export const { RsetToken } = mainSlice.actions;
export const selectToken=(state: RootState) => state.main.token
export default mainSlice.reducer;

