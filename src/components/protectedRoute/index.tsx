import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import RedirectPage from "./redirectPage"
import { rootState } from 'redux/store';
import { useRouter } from "next/router";
import { addUser } from "redux/slices/auth"
import { removeQueryParams } from "utiles"


type ProtectedRouteTypes = {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteTypes) {

  const tokenFromRedux = useSelector(state => (state as rootState).auth.user.token)
  const router = useRouter()
  console.log(removeQueryParams(router.asPath));

  const { token } = router.query
  const dispatch = useDispatch()


  // let token2 = window.localStorage.getItem("token")
  if (token){
    dispatch(addUser({ token: token }))
    router.push(removeQueryParams(router.asPath));
  }  


  return tokenFromRedux ? <>{children}</> : <RedirectPage />
}