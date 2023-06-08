import React from "react"
import { useRouter } from "next/router";

import useRemoveScroll from "hooks/useRemoveScroll";
import { removeDashAndCapitalize } from "utiles"

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
import { useGetProfileDataQuery } from "redux/services/patient/getProfileData";



export default function IndividualDashboard() {
  const [activeItem,setActiveItem] = React.useState(8)
  const [direction, changeDirection] = React.useState<"ltr" | "rtl">("ltr")
  const [profileImage,changeProfileImage] = React.useState<undefined|string>(undefined)
  const {data:profileData,refetch:refetchProfileData} = useGetProfileDataQuery(null)
  const pageRef = React.useRef(null)
  const router = useRouter()
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
      component:<UserInfo key={0} />
    }, {
      title: "Id information",
      icon: <IdIcon />,
      component:<IdInfo key={0} direction={direction}/>
    }, {
      title: "Change Password",
      icon: <LockIcon />
    }, {
      title: "Logout",
      icon: <Logout />
    },
  ]

  const userInfo = { imageUrl: profileImage, name: "Richard Wilson", moreInfo: " 24 Jul 1983, 38 years", location: "Newyork, USA" }

  useRemoveScroll(pageRef)
  



  React.useEffect(() => {

    let htmlDir = document.querySelector("html")?.getAttribute("dir")

    if (htmlDir === "rtl" || htmlDir === "ltr") {
      changeDirection(htmlDir)
    }

    document.title = removeDashAndCapitalize(router.asPath)

  }, [router.asPath,activeItem])

React.useEffect(()=>{
  
  changeProfileImage(profileData?.data?.imageUrl)
  console.log("profile data is",profileData);

},[profileData])



  return (
    <div ref={pageRef} className={classNames("overflow-y-auto h-screen")}>


      <LandingLayout showBreadCrumb={true} >
        <DashboardContent direction={direction} refetchProfileData={refetchProfileData} userInfo={userInfo} items={doctorItems} activeItem={activeItem} setActiveItem={setActiveItem} />
      </LandingLayout>
    </div>
  )
}