import { createSlice } from '@reduxjs/toolkit';

export const activeClinic = createSlice({
  name: 'activeClinic',
  initialState: {
    id:"",
    clinicName: '',
    address: '',
    phone: '',
  },
  reducers: {
    changeActiveClinic: (state, action) => {
      return action.payload;
    },
    getActiveClinic: (state) => {
      return state;
    },
  },
});

export const { changeActiveClinic, getActiveClinic } = activeClinic.actions;
export default activeClinic.reducer;
