import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit"
import router from "next/router"
import {apilogin,register} from "api/login"
import { SignupFormData,LoginFormData } from "types"
import { stat } from "fs"


export const login = createAsyncThunk("users/login",async(data:LoginFormData)=>{
    try{
        let res =await apilogin(data)
        return res
    }catch(err){
        return err
        
    }
})
export const signup = createAsyncThunk("users/signup",(data:SignupFormData)=>{
    try{
        let res = register(data)
        console.log(data);
        
        return res
    }catch(err){
        return err
        
    }
})
const usersSlice = createSlice({
    name: "users",
    initialState: {user:""},
    reducers: {},
    extraReducers:(bulder)=>{
        bulder.addCase(login.fulfilled,(state,action)=>{
            console.log("redux",action.payload);
            
            if(action.payload.data.data.token){
                localStorage.setItem("token", "success")
                router.push("/dashboard")
                state.user = action.payload.data.data            
            }
        })
        bulder.addCase(login.rejected,(state,action)=>{
            console.log("rejected");
            state.user = ""
        })
        bulder.addCase(signup.fulfilled,(state,action)=>{
            console.log("done",action.payload);
        })
        bulder.addCase(signup.rejected,()=>{
            console.log("rejected");
        })
    }

})
export default usersSlice.reducer