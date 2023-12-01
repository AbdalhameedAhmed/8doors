import { createSlice } from '@reduxjs/toolkit';

const dewfaultValue = { token: '', email: '', phoneNumber: '', username: '' };
const auth = createSlice({
  name: 'auth',
  initialState: {
    user: dewfaultValue,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = { ...action.payload };
    },
    clearUser: (state) => {
      state.user = dewfaultValue;
    },
  },
});

export const { addUser, clearUser } = auth.actions;
export default auth.reducer;
