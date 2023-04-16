import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: { user: { token: '' } },
  reducers: {
    addUser: (state, action) => {
      state.user = { ...action.payload };
    },
    clearUser: (state) => {
      state.user = { token: '' };
    },
  },
});

export const { addUser, clearUser } = auth.actions;
export default auth.reducer;
