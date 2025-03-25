import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dataDesc } from '@shared/model/type';

type userInitState = { currentUser: dataDesc };
const initValue = {
  id: '',
  name: '',
  jobTitle: '',
  department: '',
  company: '',
};
const initialState: userInitState = {
  currentUser: initValue,
};

export const currentUserSlice = createSlice({
  name: 'curUserData',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<dataDesc>) => {
      state.currentUser = action.payload;
    },
    clearCurrentUSer: (state) => {
      state.currentUser = initValue;
    },
  },
});

export const { setCurrentUser, clearCurrentUSer } = currentUserSlice.actions;
export const setCurrentUserReducer = currentUserSlice.reducer;
