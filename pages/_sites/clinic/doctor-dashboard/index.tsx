import React from "react"
import Head from "next/head";
import { useRouter } from "next/router";

import useRemoveScroll from "hooks/useRemoveScroll";
import { removeDashAndCapitalize } from "utiles"

import LandingLayout from "components/layout/landingLayout"
import DoctorDashboardContainer from "components/sites/clinic/landing/dashboard";
import classNames from "classnames";

import DoctorImage from "assets/doctor-thumb-02.jpg"
import ColumnsIcon from "assets/dashboard/table-columns-solid.svg"
import CalendarIcon from "assets/calendar-check-solid.svg"
import UserInjuredIcon from "assets/dashboard/user-injured-solid.svg"
import HourGlassIcon from "assets/dashboard/hourglass-start-solid.svg"
import ClockIcon from "assets/dashboard/clock-solid.svg"
import FileIcon from "assets/dashboard/file-invoice-solid.svg"
import FileDollarIcon from "assets/dashboard/file-invoice-dollar-solid.svg"
import StartIcon from "assets/star-solid.svg"
import MessageIcon from "assets/dashboard/comments-solid.svg"
import USerGearIcon from "assets/dashboard/user-gear-solid.svg"
import ShareICon from "assets/dashboard/share-nodes-solid.svg"
import LockIcon from "assets/dashboard/lock-solid.svg"
import Logout from "assets/dashboard/right-from-bracket-solid.svg"

export default function DoctorDashboard() {
  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")
  const pageRef = React.useRef(null)
  const router = useRouter()
  const doctorItems = [
    {
      title: "Dashboard",
      icon: <ColumnsIcon />
    },
    {
      title: "Appointments",
      icon: <CalendarIcon />
    }, {
      title: "My Patients",
      icon: <UserInjuredIcon />
    }, {
      title: "Schedule Timings",
      icon: <HourGlassIcon />
    }, {
      title: "Available Timings",
      icon: <ClockIcon />
    }, {
      title: "Invoices",
      icon: <FileIcon />
    }, {
      title: "Accounts",
      icon: <FileDollarIcon />
    }, {
      title: "Reviews",
      icon: <StartIcon />
    }, {
      title: "Message",
      icon: <MessageIcon />
    }, {
      title: "Profile Settings",
      icon: <USerGearIcon />
    }, {
      title: "Social Media",
      icon: <ShareICon />
    }, {
      title: "Change Password",
      icon: <LockIcon />
    }, {
      title: "Logout",
      icon: <Logout />
    },
  ]

  const userInfo = { image: DoctorImage, name: "Dr. Darren Elder", moreInfo: "BDS, MDS - Oral &amp; Maxillofacial Surgery" }
  useRemoveScroll(pageRef)

  React.useEffect(() => {

    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

    document.title = removeDashAndCapitalize(router.asPath)

  }, [router.asPath])





  return (
    <div ref={pageRef} className={classNames("overflow-y-auto h-screen")}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400;500;600;700;800;900" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>


      <LandingLayout showBreadCrumb={true} >
        <DoctorDashboardContainer direction={direction} items={doctorItems} userInfo={userInfo} />
      </LandingLayout>
    </div>
  )
}