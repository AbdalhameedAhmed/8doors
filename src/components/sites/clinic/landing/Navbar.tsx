import React from "react"
import classNames from "classnames";
import Link from "next/link";
import Bars from "assets/bars.svg"
import DownIcon from "assets/angle-down-solid.svg"
import useWindowSize from "hooks/useWindowSize";
import Hospital from "assets/hospital-svgrepo-com.svg"
import useOnClickOutside from "hooks/useOnClickOutside";
import CollapsedMenu from "./CollapsedMenu";
function Navbar() {

  const [openMenu, isMenuOpen] = React.useState(false)
  const { width } = useWindowSize()
  const menuRef = React.useRef(null)

  const handelMenuOpen = () => {
    isMenuOpen(!openMenu)
    console.log(openMenu);

  }

  const closeMenu = () => {
    width < 950 && openMenu && isMenuOpen(false)
  }
  useOnClickOutside(menuRef, closeMenu)

  React.useEffect(() => {
    width < 776 && isMenuOpen(false)
  }, [width])

  return (
    <>

      <nav className={classNames(" w-full w-full flex justify-between items-center px-8 h-[85px]",)}>
        <div className={classNames("fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.6)] hidden -z-10", { "!z-40 !block": openMenu })}>
        </div>

        {/* layout */}


        <div className="flex items-center justify-start h-full">
          <button onClick={handelMenuOpen} className={classNames("text-3xl mr-8", { "hidden": width > 950 })}>
            <Bars className="w-[30px] h-[30px]" />
            <i className="fa-solid fa-bars"></i>
          </button>
          <p className={classNames("text-logo text-4xl font-bold transition-all pb-2 duration-300")}>8doors</p>

          <ul ref={menuRef} className={classNames("flex items-center gap-8 h-full", { "fixed left-0 top-0 h-screen w-[250px] transition duration-300 flex-col overflow-auto scrollbar-hide z-50 scale-x-0 !items-start origin-[0%_100%] bg-[#0071dc] text-white fill-white": width < 950, "scale-x-100 !gap-[0px]": width < 950 && openMenu })}>
            <div className="bg-white w-full text-center">
              <p className={classNames("text-logo text-4xl font-bold transition-all duration-300 py-4", { "hidden": width > 950 })}>8doors</p>

            </div>
            <CollapsedMenu items={{ mainItem: "Home", subMenuItems: ["Home", "Home2", "Home3", "Home4", "Home5", "Home6", "Home7", "Home8", "Home9", "Home10", "Home11", "Home12", "Home13", "Home14", "Home15"] }} />
            <CollapsedMenu items={{ mainItem: "Doctors", subMenuItems: ["Doctor Dashboard", "Appointments", "Schedule Timing", "Patients List", "Patients Profile", "Chat", "Invoices", "Profile Settings", "Reviews", "Doctor Register", "Blog"] }} />
            <CollapsedMenu items={{ mainItem: "Patients", subMenuItems: ["Doctors", "Search Doctor", "Doctor Profile", "Booking", "Checkout", "Booking Success", "Patient Dashboard", "Favourites", "Chat", "Profile Settings", "Change Password"] }} />

            <CollapsedMenu items={{ mainItem: "Pharmacy", subMenuItems: ["Pharmacy", "Pharmacy Details", "Pharmacy Search", "Product", "Product Description", "Cart", "Product Checkout", "Payment Success", "Pharmacy Register"] }} />

            <CollapsedMenu items={{ mainItem: "Pages", subMenuItems: ["Video Call", "Video Call", "Search Doctors", "Calendar", "Doctor Onboarding", "Patient Onboarding", "Components", "Invoices", "Starter Page", "About Us", "Contact Us", "Login", "Register", "Forgot Password"] }} />

            <CollapsedMenu items={{ mainItem: "Blog", subMenuItems: ["Blog List", "Blog Grid", "Blog Details"] }} />

            <CollapsedMenu items={{ mainItem: "Admin", subMenuItems: ["Admin", "Pharmacy Admin"] }} />

          </ul>
        </div>

        <div className="flex gap-8">
          {/* icon */}
          <div className={classNames("flex items-center gap-2", { "hidden": width < 1200 })}>
            <Hospital className="w-[35px] h-[35px] fill-secondary" />
            <div>

              <p className="text-gray text-sm">Contact</p>
              <p className="text-[14px]">+1 315 369 5943</p>
            </div>
          </div>
          <button className="nav-item">
            <a className="nav-link header-login btn-one-light" href="login.html">login / Signup </a>
          </button>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
