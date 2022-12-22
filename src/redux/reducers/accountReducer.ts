import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accounts: [],
  currentUser: null,
  error: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addAccount(state, action) {
      //@ts-ignore
      let Account = state.accounts.find((account) => account?.id === action.payload.id);
      if (!Account) {
        //@ts-ignore
        state.accounts.push(action?.payload);
      }
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
const accountReducer = accountSlice.reducer;

export const { addAccount, setCurrentUser } = accountSlice.actions;

export default accountReducer;
