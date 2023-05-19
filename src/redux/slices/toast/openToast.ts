import { createSlice } from '@reduxjs/toolkit';

export const openToastSlice = createSlice({
    name: 'openToast',
    initialState: {
        isOpen: false,
        message: "Add your info",
        type: "error",
        fitScreen: false

    },
    reducers: {
        openToast: (state, action) => {
            return action.payload
        },
        closeToast: (state) => {
            state.isOpen = false
            return state
        }
    },
});

export const { openToast, closeToast } = openToastSlice.actions;
export default openToastSlice.reducer;
