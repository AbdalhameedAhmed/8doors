import React from "react"
import Head from "next/head";
import { useRouter } from "next/router";
import useRemoveScroll from "hooks/useRemoveScroll";

import { removeDashAndCapitalize } from "utiles";
import StepOne from "components/sites/clinic/landing/onboarding/individualForm/stepOne"
import StepTwo from "components/sites/clinic/landing/onboarding/individualForm/stepTwo"
import StepThree from "components/sites/clinic/landing/onboarding/individualForm/stepThree"
import StepFour from "components/sites/clinic/landing/onboarding/individualForm/stepFour"
import EmailOTP from "components/sites/clinic/landing/onboarding/individualForm/emailOTP";
import CreatePassword from "components/sites/clinic/landing/onboarding/individualForm/createPassword";
import Modal from "components/shared/modal"
import ModalBody from "components/sites/clinic/landing/onboarding/individualForm/modalBody"

import OnBoarding from "components/sites/clinic/landing/onboarding"
import { useQuery } from "@tanstack/react-query";
import { User } from "types/auth/registerTypes";

export default function PatientOnBoarding() {
  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")
  const [openModal, changeModalState] = React.useState(false)
  const [activeItem, changeActiveItem] = React.useState(0)
  const [nestedActiveForm, changeNestedActiveForm] = React.useState(0)
  const router = useRouter();
  const mainDivRef = React.useRef(null)

  const { data: userInfo }: { data: User | undefined } = useQuery({ queryKey: ["auth"], enabled: false })

  useRemoveScroll(mainDivRef)

  React.useEffect(() => {
    changeNestedActiveForm(0)
  }, [activeItem])

  React.useEffect(() => {
    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

    document.title = removeDashAndCapitalize(router.asPath)

  }, [router.asPath])

  const stepOne = [
    <StepOne key={0} direction={direction} nestedActiveForm={nestedActiveForm} changeNestedActiveForm={changeNestedActiveForm} initialInputValues={userInfo} />,
    <EmailOTP key={1} nestedActiveForm={nestedActiveForm} changeNestedActiveForm={changeNestedActiveForm} />,
    <CreatePassword key={2} changeActiveItem={changeActiveItem} activeItem={activeItem} changeModalState={changeModalState} />
  ]

  const boardingList = [
    { itemTitle: "Registration", itemSubtitle: "Enter details for register", formComponent: stepOne }
    , { itemTitle: "Profile picture", itemSubtitle: "Upload profile picture", formComponent: <StepTwo changeActiveItem={changeActiveItem} activeItem={activeItem} /> }
    , { itemTitle: "Personal details", itemSubtitle: "Enter your personal details", formComponent: <StepThree changeActiveItem={changeActiveItem} activeItem={activeItem} /> },
    { itemTitle: "Other detail", itemSubtitle: "More information", formComponent: <StepFour changeActiveItem={changeActiveItem} activeItem={activeItem} /> }]


  const handelModalBodyBtn = () => {
    changeModalState(false)
    changeActiveItem(activeItem + 1)
  }

  return (
    <div ref={mainDivRef} className={"h-screen"}>
      <Head>
        <title>{removeDashAndCapitalize(router.asPath)}</title>
      </Head>
      <Modal openModal={openModal} layoutColor="bg-[rgba(0,0,0,0.8)]" changeModalState={changeModalState} >
        <ModalBody handelFormBtn={handelModalBodyBtn} />
      </Modal>
      <OnBoarding direction={direction} boardingList={boardingList} activeItem={activeItem} nestedActiveForm={nestedActiveForm} changeActiveItem={changeActiveItem} changeNestedActiveForm={changeNestedActiveForm} />
    </div>
  )
}