import React from "react"
import { parse } from "cookie"
import { useRouter } from "next/router";

import classNames from "classnames";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import useWindowSize from "hooks/useWindowSize";
import useOnClickOutside from "hooks/useOnClickOutside";
import CollapsedMenu from "./CollapsedMenu";
import { toSubDomain } from "utiles";
import UserICon from "components/shared/menus/UserIcon"
import { rootState } from "redux/store";
import Bars from "assets/bars.svg"
import UserImage from "assets/avatar_default.jpg"
import NoUser from "assets/dashboard/blank-profile-picture-973460_1280.webp"
import { resetIndividualInfo } from "redux/slices/landing/individualInfo";


type navbarTypes = {
  direction?: "ltr" | "rtl"
}

function Navbar({ direction = "ltr" }: navbarTypes) {
  const router = useRouter()
  const [openMenu, isMenuOpen] = React.useState(false)
  const { width } = useWindowSize()
  const menuRef = React.useRef(null)
  const [tokenValue, setTokenValue] = React.useState("")
  const dispatch = useDispatch()

  const userInfo = useSelector((state) => (state as rootState).auth)
  const individualInfo = useSelector((state) => (state as rootState).individualInfo)
  const [userImageSrc, setUserImageSrc] = React.useState(NoUser.src)

  const handelMenuOpen = () => {
    isMenuOpen(!openMenu)

  }


  console.log(userInfo);

  const closeMenu = () => {
    width < 950 && openMenu && isMenuOpen(false)
  }
  useOnClickOutside(menuRef, closeMenu)

  const logout = () => {
    axios.post("/api/removeToken")
    router.push("/login")
    dispatch(resetIndividualInfo())
  }

  React.useEffect(() => {
    width < 776 && isMenuOpen(false)
  }, [width])
  React.useEffect(() => {
    setTokenValue(parse(document?.cookie).token)
  }, [])

  React.useEffect(() => {
    individualInfo.imageUrl && setUserImageSrc(individualInfo.imageUrl)
  }, [userInfo, individualInfo])


  return (
    <>

      <nav className={classNames(" w-full w-full flex justify-between items-center px-8 h-[85px] relative",)}
        style={{
          direction: direction
        }}>
        <div className={classNames("fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.6)] hidden -z-10", { "!z-40 !block": openMenu })}>
        </div>

        {/* layout */}


        <div className="flex items-center justify-start h-full">
          <button onClick={handelMenuOpen} className={classNames("text-3xl mr-8", { "hidden": width > 950, "mr-0 ml-8": direction === "rtl" })}>
            <Bars className="w-[30px] h-[30px]" />
          </button>
          {/* router.push(toSubDomain("clinic", `/staff?token=${document.cookie} */}
          <button onClick={() => {
            router.push(toSubDomain("clinic", `/redirect?page=staff&token=${parse(document.cookie).token}`))
          }}>
            <p className={classNames("text-logo text-4xl font-bold transition-all pb-2 duration-300")}>8doors</p>
          </button>

          <ul ref={menuRef} className={classNames("flex items-center gap-8 h-full", { "gap-4": width < 1080, "fixed left-0 top-0 h-screen w-[250px] transition duration-300 flex-col overflow-auto scrollbar-hide z-50 scale-x-0 !items-start origin-[0%_100%] bg-[#0071dc] text-white fill-white !gap-[0px]": width < 950, "scale-x-100": width < 950 && openMenu, "!left-auto !right-0 origin-[100%_100%]": width < 950 && direction === "rtl" })}>
            <div className="bg-white w-full text-center">
              <p className={classNames("text-logo text-4xl font-bold transition-all duration-300 py-4", { "hidden": width > 950 })}>8doors</p>

            </div>
            <CollapsedMenu direction={direction} items={{ mainItem: "Home", subMenuItems: [{ title: "Home", path: "/" }, { title: "Home2", path: "/" }, { title: "Home3", path: "/" }, { title: "Home4", path: "/" }, { title: "Home5", path: "/" }, { title: "Home6", path: "/" }, { title: "Home7", path: "/" }, { title: "Home8", path: "/" }, { title: "Home9", path: "/" }, { title: "Home10", path: "/" }, { title: "Home11", path: "/" }, { title: "Home12", path: "/" }, { title: "Home13", path: "/" }, { title: "Home14", path: "/" }, { title: "Home15", path: "/" }] }} />
            <CollapsedMenu direction={direction} items={{ mainItem: "Doctors", subMenuItems: [{ title: "Doctor Dashboard", path: "/doctor-dashboard" }, "Appointments", "Schedule Timing", "Patients List", "Patients Profile", "Chat", "Invoices", "Profile Settings", "Reviews", "Doctor Register", "Blog"] }} />
            <CollapsedMenu direction={direction} items={{ mainItem: "Patients", subMenuItems: ["Doctors", "Search Doctor", "Doctor Profile", "Booking", "Checkout", "Booking Success", { title: "Patient Dashboard", path: "/individual-dashboard" }, "Favourites", "Chat", "Profile Settings", "Change Password"] }} />

            <CollapsedMenu direction={direction} items={{ mainItem: "Pharmacy", subMenuItems: ["Pharmacy", "Pharmacy Details", "Pharmacy Search", "Product", "Product Description", "Cart", "Product Checkout", "Payment Success", "Pharmacy Register"] }} />

            <CollapsedMenu direction={direction} items={{ mainItem: "Pages", subMenuItems: ["Video Call", "Video Call", "Search Doctors", "Calendar", { title: "Doctor Onboarding", path: "/doctor-onboarding" }, { title: "Patient Onboarding", path: "/patient-onboarding" }, "Components", "Invoices", "Starter Page", "About Us", "Contact Us", "Login", { title: "Register", path: "/register" }, "Forgot Password"] }} />

            <CollapsedMenu direction={direction} items={{ mainItem: "Blog", subMenuItems: ["Blog List", "Blog Grid", "Blog Details"] }} />

            <CollapsedMenu direction={direction} items={{ mainItem: "Admin", subMenuItems: ["Admin", "Pharmacy Admin"] }} />

          </ul>
        </div>

        <div className="flex gap-8">
          {/* icon */}

          {
            tokenValue ? (
              <UserICon userImgSrc={userImageSrc} userInfo={{ username: userInfo.user.username, email: userInfo.user.email }} firstMenuItems={[{ name: "Home" }, { name: "profile" }, { name: "Settings" }]} lastMenuItems={[{ name: "Logout", onClick: logout }]} />
            ) : (
              <button className="bg-white min-w-[110px] border border-[2px] border-land-primary rounded-[4px] px-[15px] py-[10px] text-center text-[15px] text-land-primary transition-all duration-[0.5s] shadow-[inset_0_0_0_0_#09e5ab] hover:bg-land-primary hover:text-white hover:shadow-[inset_0_50px_0_0_#09e5ab] font-[500]" onClick={() => { logout() }}>
                <p className="nav-link">
                  login / Sign up
                </p>
              </button>

            )
          }

        </div>

      </nav>
    </>
  );
}

export default Navbar;
