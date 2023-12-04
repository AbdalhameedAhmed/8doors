import React from "react"
import { useRouter } from "next/router";

import useRemoveScroll from "hooks/useRemoveScroll";
import { capitalizeFirstLetter, removeDashAndCapitalize } from "utiles"

import LandingLayout from "components/layout/landingLayout"
import DashboardContent from "components/sites/clinic/landing/dashboard";
import classNames from "classnames";

import ColumnsIcon from "assets/dashboard/table-columns-solid.svg"
import MessageIcon from "assets/dashboard/comments-solid.svg"
import USerGearIcon from "assets/dashboard/user-gear-solid.svg"
import LockIcon from "assets/dashboard/lock-solid.svg"
import Logout from "assets/dashboard/right-from-bracket-solid.svg"
import BookMark from "assets/dashboard/bookmark-solid.svg"
import UsersIcon from "assets/dashboard/users-solid.svg"
import WaveFileIcon from "assets/dashboard/file-waveform-solid.svg"
import LitIcon from "assets/dashboard/rectangle-list-solid.svg"
import ClipboardIcon from "assets/dashboard/clipboard-solid.svg"
import IdIcon from "assets/dashboard/id-card-solid.svg"

import UserInfo from "components/sites/clinic/landing/dashboard/individualCards/profileSettings/userInfo";
import IdInfo from "components/sites/clinic/landing/dashboard/individualCards/idInformation"
import ChangePassword from "components/sites/clinic/landing/dashboard/individualCards/changePassword"
import { country } from "types/lookupTypes/country";
import { state } from "types/lookupTypes/stateType";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllStatesData, getCountries, getProfileData } from "tanstack/fetchers/individualDashboard";
import { statesTypes } from "types/patientTypes/patientProfileData";

let userLocation = ""

export default function IndividualDashboard() {
  const [activeItem, setActiveItem] = React.useState(8)
  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")
  const [profileImage, changeProfileImage] = React.useState<undefined | string>(undefined)
  const [userName, setUserName] = React.useState<string>("")
  const [location, setLocation] = React.useState<string>("")
  const [userDateOfBirth, setUserDateOfBirth] = React.useState<string>("")

  const pageRef = React.useRef(null)
  const router = useRouter()
  useRemoveScroll(pageRef)

  const profileData = useQuery({ queryKey: ["patient"], queryFn: getProfileData })
  const { data: backCountries } = useQuery({ queryKey: ["countries"], queryFn: getCountries })

  const { mutate: getAllStatesMutation } = useMutation({
    mutationFn: getAllStatesData,
    onSuccess: async (res) => {
      getStatesSuccessfully(res.data)
    }
  })

  React.useEffect(() => {

    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

    document.title = removeDashAndCapitalize(router.asPath)

  }, [router.asPath, activeItem])


  React.useEffect(() => {

    userLocation = ""

    changeProfileImage(profileData?.data?.imageUrl)

    profileData?.data?.firstName && profileData?.data?.lastName &&
      setUserName(`${capitalizeFirstLetter(profileData?.data?.firstName)} ${capitalizeFirstLetter(profileData?.data?.lastName)}`)

    profileData?.data?.dateOfBirth && setUserDateOfBirth(`${profileData?.data?.dateOfBirth}`)

    if (profileData?.data?.countryId) {
      backCountries?.map((country: country) => {

        if (country.id === profileData?.data?.countryId) {
          userLocation += country.nameEn
          getAllStatesMutation(country.id)
        }
      }
      )
    }

  }, [backCountries, profileData?.data])

  const doctorItems = [
    {
      title: "Dashboard",
      icon: <ColumnsIcon />
    },
    {
      title: "Favourites",
      icon: <BookMark />
    }, {
      title: "Dependent",
      icon: <UsersIcon />
    }, {
      title: "Message",
      icon: <MessageIcon />
    }, {
      title: "Accounts",
      icon: <WaveFileIcon />
    }, {
      title: "Orders",
      icon: <LitIcon />
    }, {
      title: "Add Medical Records",
      icon: <ClipboardIcon />
    }, {
      title: "Medical Details",
      icon: <WaveFileIcon />
    }, {
      title: "Profile Settings",
      icon: <USerGearIcon />,
      component: <UserInfo key={0} />
    }, {
      title: "Id information",
      icon: <IdIcon />,
      component: <IdInfo key={0} direction={direction} />
    }, {
      title: "Change Password",
      icon: <LockIcon />,
      component: <ChangePassword key={0} direction={direction} />

    }, {
      title: "Logout",
      icon: <Logout />
    },
  ]

  const userInfo = { imageUrl: profileImage, name: userName, moreInfo: userDateOfBirth, location: location }

  const getStatesSuccessfully = (states: statesTypes) => {
    states.map((state: state) => {
      if (state.id == profileData?.data?.stateId) {
        userLocation = `${userLocation} ${state.nameEn}`
        setLocation(userLocation)
      }
    })
  }

  return (
    <div ref={pageRef} className={classNames("overflow-y-auto h-screen")}>
      <LandingLayout showBreadCrumb={true} >
        <DashboardContent direction={direction} refetchProfileData={profileData.refetch} userInfo={userInfo} items={doctorItems} activeItem={activeItem} setActiveItem={setActiveItem} />
      </LandingLayout>
    </div>
  )
}