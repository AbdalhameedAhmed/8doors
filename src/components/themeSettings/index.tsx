import classNames from "classnames"
import React from "react"


import SettingHeader from "./SettingHeader"
import Mode from "./Mode"
import Contrast from "./Contrast"
import Direction from "./Direction"
import Layout from "./Layout"
import Presets from "./Presets"
import SettingFooter from "./SettingFooter"

import useOnClickOutside from "hooks/useOnClickOutside"

export default function ThemeSettings() {
  let [theme, setTheme] = React.useState("");

  const [menu, isMenuOpen] = React.useState(false)
  const menuRef = React.useRef(null)
  const openMenu = () => {
    isMenuOpen(true)
  }

  const closeMenu = () => {
    isMenuOpen(false)
  }

  useOnClickOutside(menuRef, closeMenu)

  const changeTheme = (themeName: string) => {
    localStorage.setItem("theme", themeName);
    if (themeName) {
      document.documentElement.className = "";
      document.documentElement.classList.add(themeName);
    } else document.documentElement.className = "";

    setTheme(themeName);
    isMenuOpen(false);
  }



  React.useEffect(() => {
    setTheme(localStorage.getItem("theme") || "");
    localStorage.getItem("theme") &&
      document.documentElement.classList.add(
        localStorage.getItem("theme") || ""
      );
  }, []);

  return (
    <>
      <button className="fixed flex flex-col gap-1 items-center justify-center w-[50px] h-[50px] group bg-primary rounded-full bottom-[24px] right-[2.7rem] z-40 duration-300 hover:scale-105"
        style={{
          boxShadow: "rgb(99 115 129 / 36%) -12px 12px 32px -4px"
        }}
        onClick={() => {
          openMenu()


        }}
      >
        <span className="px-[10.5px] py-[4.5px] rounded-[10px] bg-theme-primary relative before:absolute before:content-[''] before:right-[3px] before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-full before:bg-theme-secondary "></span>
        <span className="px-[10.5px] py-[4.5px] rounded-[10px] bg-theme-secondary relative before:absolute before:content-[''] before:left-[3px] before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px] before:rounded-full before:bg-theme-primary "></span>

        <div className="absolute -top-[30px] origin-[50%_100%] transiton duration-100 scale-0 group-hover:scale-100 left-1/2 -translate-x-1/2 text-[0.6875rem] font-[600] bg-[rgba(33,43,54)] rounded-lg text-white px-2 py-1">
          <p>Settings</p>
        </div>
      </button>


      <div ref={menuRef} className={classNames("fixed z-50 right-0 top-0 h-screen w-[260px] bg-blurred-secondary backdrop-blur-[6px] transition scale-x-0 origin-right", { "duration-[500ms] !scale-x-100": menu, "w-[270px] duration-200": !menu })}>

        {/* header */}
        <SettingHeader closeMenu={closeMenu} />
        {/* body */}
        <div className="p-4">

          <Mode theme={theme} changeTheme={changeTheme} />
          <Contrast />

          <Direction />

          <Layout />
          <Presets />

          {/* footer */}


          <SettingFooter />


        </div>


      </div>
    </>
  )
}