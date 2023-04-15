import { createSlice } from "@reduxjs/toolkit";

export const activeClinic = createSlice({
  name:"activeClinic",
  initialState:null,
  reducers:{
    changeActiveClinic:(state,action)=>{
      console.log("hello from redux",action.payload);
      
      return action.payload
    },
    getActiveClinic:(state)=>{
     return state
    }
  }
})

export const {changeActiveClinic,getActiveClinic} = activeClinic.actions
export default activeClinic.reducer