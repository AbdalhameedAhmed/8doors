import React from "react"

import { useRouter } from "next/router";
import classNames from "classnames";
import { parse } from "cookie"
import { useQuery } from "@tanstack/react-query";

import useRemoveScroll from "hooks/useRemoveScroll";

import Hero from "components/sites/clinic/landing/landingSections/heroSection";
import SlideSection from "components/sites/clinic/landing/landingSections/slideSection"
import BookOutDoctor from "components/sites/clinic/landing/landingSections/bookOurDoctorSection"
import CardsSection from "components/sites/clinic/landing/landingSections/cardsSection";
import ContactUs from "components/sites/clinic/landing/landingSections/contactUs";
import AvailabeFeatures from "components/sites/clinic/landing/landingSections/availabelFeatures";
import LandingLayout from "components/layout/landingLayout";
import Blogs from "components/sites/clinic/landing/landingSections/blogsSection";


export default function Index() {

  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")
  const [tokenValue, setTokenValue] = React.useState("")
  const [uncompletedInfo, showUncompletedInfo] = React.useState(false)
  const router = useRouter();
  const data = useQuery({ queryKey: ["auth"], enabled: false })

  const ref = React.useRef(null)
  useRemoveScroll(ref)

  console.log("look at this", data.data);


  React.useEffect(() => {

    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

    document.title = "Landing"

  }, [router.asPath])

  React.useEffect(() => {
    let token = parse(document?.cookie).token
    setTokenValue(token)
    token ? showUncompletedInfo(true) : showUncompletedInfo(false)
  }, [])

  return (

    <div ref={ref} className={classNames("overflow-y-auto h-screen")} >
      <LandingLayout uncompletedInfo={uncompletedInfo}>

        <Hero direction={direction} />

        <CardsSection direction={direction} />
        <SlideSection direction={direction} />
        <BookOutDoctor direction={direction} />
        <AvailabeFeatures direction={direction} />
        <ContactUs direction={direction} />
        <Blogs direction={direction} />
      </LandingLayout>


    </div>
  )
}