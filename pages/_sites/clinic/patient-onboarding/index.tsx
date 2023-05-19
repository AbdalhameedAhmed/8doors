import React from "react"
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
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
export default function PatientOnBoarding() {
  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")
  let [openModal, changeModalState] = React.useState(false)
  let userInfo = useSelector(state => state.userInfo)
  const [activeItem, changeActiveItem] = React.useState(0)
  const [nestedActiveForm, changeNestedActiveForm] = React.useState(0)
  const router = useRouter();
  const mainDivRef = React.useRef(null)
  const stepOne = [
    <StepOne key={0} direction={direction} nestedActiveForm={nestedActiveForm} changeActiveItem={changeActiveItem} activeItem={activeItem} changeNestedActiveForm={changeNestedActiveForm} initialInputValues={userInfo} />,
    <EmailOTP key={1} nestedActiveForm={nestedActiveForm} changeNestedActiveForm={changeNestedActiveForm} />,
    <CreatePassword key={2} changeActiveItem={changeActiveItem} activeItem={activeItem} changeModalState={changeModalState} />
  ]


  const boardingList = [
    { itemTitle: "Registration", itemSubtitle: "Enter details for register", formComponent: stepOne }
    , { itemTitle: "Profile picture", itemSubtitle: "Upload profile picture", formComponent: <StepTwo changeActiveItem={changeActiveItem} activeItem={activeItem} /> }
    , { itemTitle: "Personal details", itemSubtitle: "Enter your personal details", formComponent: <StepThree changeActiveItem={changeActiveItem} activeItem={activeItem} /> },
    { itemTitle: "Other detail", itemSubtitle: "More information", formComponent: <StepFour changeActiveItem={changeActiveItem} activeItem={activeItem} /> }]

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
  return (
    <div ref={mainDivRef} className={"overflow-y-auto h-screen"}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@200;300;400;500;600;700;800;900" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <title>{removeDashAndCapitalize(router.asPath)}</title>
      </Head>
      <Modal openModal={openModal} layoutColor="bg-[rgba(0,0,0,0.8)]" changeModalState={changeModalState} onModalClose={() => { changeActiveItem(activeItem + 1) }}>
        <ModalBody />
      </Modal>
      <OnBoarding direction={direction} boardingList={boardingList} activeItem={activeItem} nestedActiveForm={nestedActiveForm} changeActiveItem={changeActiveItem} changeNestedActiveForm={changeNestedActiveForm} />
    </div>
  )
}