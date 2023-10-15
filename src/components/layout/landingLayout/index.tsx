import React from "react"

import { useSelector, useDispatch } from "react-redux"
import Navbar from "components/sites/clinic/landing/navbar"
import Footer from "components/sites/clinic/landing/footer"
import BreadCrumb from "components/sites/clinic/landing/breadCrumb"
import UncompletedInfo from "components/sites/clinic/landing/uncompletedInfo"
import { rootState } from "redux/store"
import { useGetProfileDataQuery } from "redux/services/patient/getProfileData"
import { addIndividualInfo } from "redux/slices/landing/individualInfo"

type LandingLayoutTypes = {
  children: React.ReactNode;
  showBreadCrumb?: boolean;
  uncompletedInfo?: boolean
}
export default function LandingLayout({ children, showBreadCrumb = false, uncompletedInfo = false }: LandingLayoutTypes) {

  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")
  const { user } = useSelector(state => (state as rootState).auth)
  const { data: profileData, refetch: refetchProfileData } = useGetProfileDataQuery(null)
  const dispatch = useDispatch()




  React.useEffect(() => {

    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

  }, [])

  React.useEffect(() => {
    refetchProfileData()
  }, [refetchProfileData, user])

  React.useEffect(() => {

    dispatch(addIndividualInfo(profileData.data))

  }, [dispatch, profileData])

  console.log("user data", user);



  return (
    <>
      <Navbar direction={direction} />
      {showBreadCrumb && <BreadCrumb />}
      {uncompletedInfo && <UncompletedInfo />}
      {children}
      <Footer direction={direction} />
    </>
  )
}