import { createSlice } from "@reduxjs/toolkit";
const auth = createSlice({
    name: "auth",
    initialState: {user:{}},
    reducers: {
        addUser: (state, action) => {          
          state.user = {...action.payload}
        },
        clearUser:(state)=>{
          state.user = {}
        }
    }
})


export const { addUser,clearUser } = auth.actions
export default auth.reducer;