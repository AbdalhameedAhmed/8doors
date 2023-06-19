import React from "react"

import { useRouter } from "next/router";
import classNames from "classnames";

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
  const router = useRouter();
  const ref = React.useRef(null)
  useRemoveScroll(ref)



  React.useEffect(() => {

    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

    document.title = "Landing"

  }, [router.asPath])


  return (
    <div ref={ref} className={classNames("overflow-y-auto h-screen")} >
      <LandingLayout uncompletedInfo={true}>

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