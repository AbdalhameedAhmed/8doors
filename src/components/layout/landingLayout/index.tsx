import React from "react"

import Navbar from "components/sites/clinic/landing/navbar"
import Footer from "components/sites/clinic/landing/footer"
import BreadCrumb from "components/sites/clinic/landing/breadCrumb"
import UncompletedInfo from "components/sites/clinic/landing/uncompletedInfo"

type LandingLayoutTypes = {
  children: React.ReactNode;
  showBreadCrumb?: boolean;
  uncompletedInfo?: boolean
}
export default function LandingLayout({ children, showBreadCrumb = false, uncompletedInfo = false }: LandingLayoutTypes) {

  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")

  React.useEffect(() => {

    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

  }, [])

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