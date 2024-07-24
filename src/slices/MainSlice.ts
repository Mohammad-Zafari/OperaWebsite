// src/slices/MainSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';


interface MainState {
    userName: string;
    password: string;
    showPassWord: boolean;
    userErrorStyle: object;
    passwordErrorStyle: object;
}

const initialState: MainState = {
    userName: "",
    password: "",
    showPassWord: false,
    userErrorStyle: {},
    passwordErrorStyle: {},
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    RsetUserName: (state, action: PayloadAction<string>) => {
        state.userName = action.payload;
        console.log('User name set:', state.userName);
    },
    RsetPassword: (state, action: PayloadAction<string>) => {
        state.password = action.payload;
        console.log('password set:', state.userName);
    },
    RsetShowPassword: (state) => {
        state.showPassWord = !state.showPassWord;
    },
    RsetUserErrorStyle: (state, action: PayloadAction<object>) => {
        state.userErrorStyle = action.payload;
    },
    RsetPasswordErrorStyle: (state, action: PayloadAction<object>) => {
        state.passwordErrorStyle = action.payload;
    }
  },
});

export const { RsetUserName, RsetPassword, RsetShowPassword, RsetUserErrorStyle, RsetPasswordErrorStyle } = mainSlice.actions;
export const selectUserName = (state:RootState) => state.main.userName;
export const selectPassword = (state:RootState) => state.main.password;
export const selectShowPassword = (state:RootState) => state.main.showPassWord;
export const selectUserErrorStyle = (state:RootState) => state.main.userErrorStyle;
export const selectPasswordErrorStyle = (state:RootState) => state.main.passwordErrorStyle; 
export default mainSlice.reducer;
