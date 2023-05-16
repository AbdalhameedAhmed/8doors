import { createSlice } from '@reduxjs/toolkit';

export const userRegisterInfo = createSlice({
  name: 'activeClinic',
  initialState: {
    name:"",
    mobile: '',
    email: '',
  },
  reducers: {
    addUserInfo: (state, action) => {
      return action.payload;
    },
    getUserInfo: (state) => {
      return state;
    },
  },
});

export const { addUserInfo, getUserInfo } = userRegisterInfo.actions;
export default userRegisterInfo.reducer;
