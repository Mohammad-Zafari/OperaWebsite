// contactSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  contactName: string;
  contactPhoneNumber?: number; // Could be undefined if not provided
  contactText: string;
}

const initialState: ContactState = {
  contactName: '',
  contactPhoneNumber: undefined,
  contactText: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    RsetContactName(state, action: PayloadAction<string>) {
      state.contactName = action.payload;
      console.log(state.contactName)
    },
    RsetContactPhoneNumber(state, action: PayloadAction<number | undefined>) {
      state.contactPhoneNumber = action.payload;
      console.log(state.contactPhoneNumber)

    },
    RsetContactText(state, action: PayloadAction<string>) {
      state.contactText = action.payload;
      console.log(state.contactText)

    },
    resetContactForm(state) {
      state.contactName = '';
      state.contactPhoneNumber = undefined;
      state.contactText = '';
    },
  },
});

export const { RsetContactName, RsetContactPhoneNumber, RsetContactText, resetContactForm } = contactSlice.actions;
export default contactSlice.reducer;
