// src/slices/MainSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';


interface MainState {
    userName: string;
    password: string;
    showPassWord: boolean;
    userErrorStyle: object;
    passwordErrorStyle: object;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
    email: string;
    showPasswordConfirmation: boolean;
    formErrors: object;
    rememberMe: boolean;
}

const initialState: MainState = {
    userName: "",
    password: "",
    showPassWord: false,
    userErrorStyle: {},
    passwordErrorStyle: {},
    passwordConfirmation: "",
    firstName: "",
    lastName: "",
    email: "",
    showPasswordConfirmation: false,
    formErrors: {
        first:"",
        last:"",
        email:"",
        userName:"",
        password:"",
        passwordConfirm:""
    },
    rememberMe: false,
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
    RsetShowPassword: (state, action: PayloadAction<boolean>) => {
        state.showPassWord = !state.showPassWord;
    },
    RsetUserErrorStyle: (state, action: PayloadAction<object>) => {
        state.userErrorStyle = action.payload;
    },
    RsetPasswordErrorStyle: (state, action: PayloadAction<object>) => {
        state.passwordErrorStyle = action.payload;
    },
    RsetPasswordConfirmation: (state, action: PayloadAction<string>) => {
        state.passwordConfirmation = action.payload;
    },
    RsetFirstName: (state, action: PayloadAction<string>) => {
        state.firstName = action.payload;
    },
    RsetLastName: (state, action: PayloadAction<string>) => {
        state.lastName = action.payload;
    },
    RsetEmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
    },
    RsetShowPasswordConfirmation: (state, action: PayloadAction<boolean>) => {
        state.showPasswordConfirmation = !state.showPasswordConfirmation;
    },
    RsetFormErrors: (state, action: PayloadAction<object>) => {
        state.formErrors = action.payload;
    },
    RsetRememberMe: (state, action: PayloadAction<boolean>) => {
        state.rememberMe = !state.rememberMe;
    },
  },
});

export const { RsetUserName, RsetPassword, RsetShowPassword, RsetUserErrorStyle, RsetPasswordErrorStyle, RsetPasswordConfirmation, RsetFirstName,
     RsetLastName, RsetEmail, RsetShowPasswordConfirmation, RsetFormErrors, RsetRememberMe } = mainSlice.actions;
export const selectUserName = (state:RootState) => state.main.userName;
export const selectPassword = (state:RootState) => state.main.password;
export const selectShowPassword = (state:RootState) => state.main.showPassWord;
export const selectUserErrorStyle = (state:RootState) => state.main.userErrorStyle;
export const selectPasswordErrorStyle = (state:RootState) => state.main.passwordErrorStyle; 
export const selectFirstName = (state:RootState) => state.main.firstName; 
export const selectLastName = (state:RootState) => state.main.lastName;
export const selectEmail = (state:RootState) => state.main.email;
export const selectPasswordConfirmation = (state:RootState) => state.main.passwordConfirmation;
export const selectShowPasswordConfirmation = (state:RootState) => state.main.showPasswordConfirmation;
export const selectFormErrors= (state:RootState) => state.main.formErrors;
export const selectRememberMe= (state:RootState) => state.main.rememberMe;
export default mainSlice.reducer;
