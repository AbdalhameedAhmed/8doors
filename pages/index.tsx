import React from "react"
import Head from "next/head";

import { useRouter } from "next/router";
import classNames from "classnames";
import { useSelector } from "react-redux";

import useRemoveScroll from "hooks/useRemoveScroll";
import { removeDashAndCapitalize } from "utiles";

import Hero from "components/sites/clinic/landing/hero";
import Slide from "components/sites/clinic/landing/Slide"
import BookOutDoctor from "components/sites/clinic/landing/BookOutDoctor"
import CardsSection from "components/sites/clinic/landing/CardsSection";
import ContactUs from "components/sites/clinic/landing/ContactUs";
import AvailabeFeatures from "components/sites/clinic/landing/AvailabeFeatures";
import LandingLayout from "components/layout/landingLayout";
import Blogs from "components/sites/clinic/landing/Blogs";
import { rootState } from "redux/store";


export default function Index() {

  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")
  const router = useRouter();
  const { user } = useSelector(state => (state as rootState).auth)
  const ref = React.useRef(null)
  let slideTitle = "Clinic and Specialities"
  let slideSubTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

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
        <Slide title={slideTitle} subTitle={slideSubTitle} direction={direction} />
        <BookOutDoctor direction={direction} />
        <AvailabeFeatures direction={direction} />
        <ContactUs direction={direction} />
        <Blogs direction={direction} />
      </LandingLayout>


    </div>
  )
}