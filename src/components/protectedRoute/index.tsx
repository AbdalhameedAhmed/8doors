import React from "react"
import RedirectPage from "./redirectPage"

type props = {
    children: React.ReactNode
}

export default function ProtectedRoute({ children }: props) {

    const [isAuth, changeAuthState] = React.useState(false)
    React.useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === process.env.NEXT_PUBLIC_token) {
            changeAuthState(true)
        }
    }, [])


    return isAuth ? <>{children}</> : null
}