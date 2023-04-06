import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit"
import router from "next/router"
import {apilogin,register} from "api/index"
import { SignupFormData } from "types"


export const login = createAsyncThunk("users/login",(data:SignupFormData)=>{
    try{
        let res = apilogin(data)
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
    initialState: [],
    reducers: {},
    extraReducers:(bulder)=>{
        bulder.addCase(login.fulfilled,(state,action)=>{
            if(action.payload.data.data.token){
                localStorage.setItem("token", "success")
                router.push("/dashboard")
            
            }
        })
        bulder.addCase(login.rejected,()=>{
            console.log("rejected");
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