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
  },
});

export const { setCurrentUser } = currentUserSlice.actions;
export const setCurrentUserReducer = currentUserSlice.reducer;
