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
