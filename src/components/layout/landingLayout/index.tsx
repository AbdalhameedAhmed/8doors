import React from "react"

import Navbar from "components/sites/clinic/landing/Navbar"
import Footer from "components/sites/clinic/landing/Footer"
import BreadCrumb from "components/sites/clinic/landing/BreadCrumb"

type LandingLayoutTypes = {
  children: React.ReactNode
  showBreadCrumb?: boolean
}
export default function LandingLayout({ children, showBreadCrumb = false }: LandingLayoutTypes) {

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
      {children}
      <Footer direction={direction} />
    </>
  )
}