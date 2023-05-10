import React from "react"

import Navbar from "components/sites/clinic/landing/Navbar"
import Footer from "components/sites/clinic/landing/Footer"

type LandingLayoutTypes = {
    children:React.ReactNode
}
export default function LandingLayout ({children}:LandingLayoutTypes) {

    const [direction,changeDirection] = React.useState<"ltr"|"rtl">("ltr")


    React.useEffect(() => {

        let htmlDir = document.querySelector("html")?.getAttribute("dir")
    
        if(htmlDir === "rtl" || htmlDir==="ltr") {
          changeDirection(htmlDir)
        }
        
      }, [])




    return (
    <>
    <Navbar direction={direction}/>
    {children}
    <Footer direction={direction}/>
    </>        
    )
}