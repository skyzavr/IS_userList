import { RootState } from '@app/store/store';

export const usersSelector = (state: RootState) => state.users;
export const currentUserSelector = (state: RootState) => state.currentUser;
