import React from "react"
import { useSelector } from "react-redux"

import RedirectPage from "./redirectPage"
import { rootState } from 'redux/store';


type ProtectedRouteTypes = {
    children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteTypes) {

    const token = useSelector(state => (state as rootState).auth.user.token)


    return token ? <>{children}</> : <RedirectPage />
}