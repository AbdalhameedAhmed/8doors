import React from "react"
import Head from "next/head";
import { useRouter } from "next/router";

import useRemoveScroll from "hooks/useRemoveScroll";
import { removeDashAndCapitalize } from "utiles"

import LandingLayout from "components/layout/landingLayout"
import DoctorDashboardContainer from "components/sites/clinic/landing/dashboard";
import classNames from "classnames";


export default function DoctorDashboard() {
  const pageRef = React.useRef(null)
  const router = useRouter()

  useRemoveScroll(pageRef)

  React.useEffect(() => {

    // let htmlDir = document.querySelector("html")?.getAttribute("dir")

    // if (htmlDir === "rtl" || htmlDir === "ltr") {
    //   changeDirection(htmlDir)
    // }

    document.title = removeDashAndCapitalize(router.asPath)

  }, [router.asPath])


  return (
    <div ref={pageRef} className={classNames("overflow-y-auto h-screen")}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400;500;600;700;800;900" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>
      

      <LandingLayout showBreadCrumb={true} >
        <DoctorDashboardContainer />
      </LandingLayout>
    </div>
  )
}