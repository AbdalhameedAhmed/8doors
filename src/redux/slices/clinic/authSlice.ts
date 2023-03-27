import { createSlice } from "@reduxjs/toolkit"
import { users } from "redux/users/users"
import router from "next/router"

const usersSlice = createSlice({
    name: "users",
    initialState: users,
    reducers: {
        checkauth: (state, action) => {
            let isauth = state.find((user) => {
                return user.username == action.payload.username && user.password == action.payload.password
            })
            if (isauth) {
                localStorage.setItem("token", "success")
                router.push("/dashboard")
            }
        },
        addUser: (state, action) => {
            state.push(action.payload)
            router.push('/login')
        }

    }

})

export const { checkauth, addUser } = usersSlice.actions
export default usersSlice.reducer