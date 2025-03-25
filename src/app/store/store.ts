import { configureStore } from '@reduxjs/toolkit';

import { setCurrentUserReducer } from '@widgets/userList/model/currentUserSlice';
import { setUsersListReducer } from '@widgets/userList/model/userSlice';

export const store = configureStore({
  reducer: { users: setUsersListReducer, currentUser: setCurrentUserReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
