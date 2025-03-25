import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dataDesc } from '@shared/model/type';
import { generateUserList } from '../lib/userGeneration';

type initState = { users: dataDesc[]; userNumber: number };
type updateUserPayload = { id: string; data: dataDesc };

const usersInit: initState = {
  users: [],
  userNumber: 0,
};

export const usersSlice = createSlice({
  name: 'usersData',
  initialState: usersInit,
  reducers: {
    setUsersList: (state, action: PayloadAction<number>) => {
      const usersList = [...state.users, ...generateUserList(action.payload)];
      state.users = usersList;
      state.userNumber = usersList.length;
    },
    updateUser: (state, action: PayloadAction<updateUserPayload>) => {
      const { id, data } = action.payload;
      const ind = state.users.findIndex((el) => el.id === id);
      const dataChanged = [...state.users];
      dataChanged[ind] = { ...data };
      state.users = dataChanged;
    },
  },
});

export const { setUsersList, updateUser } = usersSlice.actions;
export const setUsersListReducer = usersSlice.reducer;
