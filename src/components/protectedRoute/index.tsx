import React from "react"
import RedirectPage from "./redirectPage"

type props = {
    children: React.ReactNode
}

export default function ProtectedRoute({ children }: props) {

    const token = localStorage.getItem("token")

    console.log("render protected route");
    

    return token  ? <>{children}</> : <RedirectPage />
}