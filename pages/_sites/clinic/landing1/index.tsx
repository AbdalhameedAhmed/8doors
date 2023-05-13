import React from "react"
import Head from "next/head";

import { useRouter } from "next/router";
import classNames from "classnames";

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


export default function Landing1() {

  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")
  const router = useRouter();
  const ref = React.useRef(null)
  let slideTitle = "Clinic and Specialities"
  let slideSubTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  useRemoveScroll(ref)



  React.useEffect(() => {

    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

    document.title = removeDashAndCapitalize(router.asPath)

  }, [router.asPath])

  return (
    <div ref={ref} className={classNames("overflow-y-auto h-screen")} >
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400;500;600;700;800;900" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>
      <LandingLayout>

        <Hero direction={direction} />

        <CardsSection direction={direction} />
        <Slide title={slideTitle} subTitle={slideSubTitle} direction={direction} />
        <BookOutDoctor direction={direction} />
        <AvailabeFeatures />
        <ContactUs direction={direction} />
        <Blogs direction={direction} />
      </LandingLayout>


    </div>
  )
}