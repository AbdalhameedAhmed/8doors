import React from "react"
import { useSelector } from "react-redux"
import RedirectPage from "./redirectPage"

type props = {
    children: React.ReactNode
}

export default function ProtectedRoute({ children }: props) {

    const token = useSelector(state=>state.auth.user.token)

    
    return token  ? <>{children}</> : <RedirectPage />
}