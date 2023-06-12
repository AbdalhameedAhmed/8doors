import React from "react"

import { useRouter } from "next/router";
import useRemoveScroll from "hooks/useRemoveScroll";

import OnBoarding from "components/sites/clinic/landing/onboarding"

export default function DoctorOnBoarding() {
  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")

  const [activeItem, changeActiveItem] = React.useState(0)
  const [nestedActiveForm, changeNestedActiveForm] = React.useState(0)

  const mainDivRef = React.useRef(null)
  const router = useRouter();
  useRemoveScroll(mainDivRef)
  React.useEffect(() => {

    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

  }, [router.asPath])

  const boardingList = [{ itemTitle: "Registration", itemSubtitle: "Enter Details for Register " }, { itemTitle: "Upload Identity", itemSubtitle: "Upload your Identity for Verification" }, { itemTitle: "Personal Details", itemSubtitle: "Enter your Personal Details" }, { itemTitle: "Doctor Verification", itemSubtitle: "Upload Documents for the Verification" }, { itemTitle: "Payment details", itemSubtitle: "Setup Your Payment Details" }, { itemTitle: "Preferences", itemSubtitle: "Setup Your Preferences for your Account" }]



  return (
    <div ref={mainDivRef} className={"overflow-y-auto h-screen"}>
      <OnBoarding boardingList={boardingList} direction={direction} activeItem={activeItem} nestedActiveForm={nestedActiveForm} changeActiveItem={changeActiveItem} changeNestedActiveForm={changeNestedActiveForm} />
    </div>
  )
}