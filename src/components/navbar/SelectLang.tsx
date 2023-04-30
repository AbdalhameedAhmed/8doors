import React from "react"

import classNames from "classnames"

import useOnClickOutside from "hooks/useOnClickOutside"

import EnFlag from "assets/ic_flag_en.svg"
import FrFlag from "assets/ic_flag_fr.svg"
import CnFlag from "assets/ic_flag_cn.svg"
import VnFlag from "assets/ic_flag_vn.svg"
import ArFlag from "assets/ic_flag_sa.svg"


export default function SelectLang() {
  const [subMenu, openSubMenu] = React.useState(false)
  const [lang, changeLang] = React.useState("En")
  const menuRef = React.useRef(null)



  const menuHandler = () => {
    openSubMenu(!subMenu)
  }
  const outSideHandler = () => {
    openSubMenu(false)

  }
  const changeLangHandler = (langName: string) => {
    changeLang(langName)
  }

  useOnClickOutside(menuRef, outSideHandler)

  const flagChange = (langName: string) => {

    switch (langName) {
      case "En":
        return (<EnFlag className="duration-300 hover:scale-105" />)
      case "Fr":
        return (<FrFlag className="duration-300 hover:scale-105" />)
      case "Cn":
        return (<CnFlag className="duration-300 hover:scale-105" />)
      case "Vn":
        return (<VnFlag className="duration-300 hover:scale-105" />)
      case "Ar":
        return (<ArFlag className="duration-300 hover:scale-105" />)
    }
  }

  return (
    <div ref={menuRef}>

      <div className={classNames("p-1 rounded-full relative w-[45px] h-[45px] mr-1 flex items-center justify-center hover:bg-layout-secondary", { "bg-layout-secondary": subMenu })}
        onClick={() => {
          menuHandler()
        }}>

        <div>
          {
            flagChange(lang)
          }
        </div>

        <span className={classNames("absolute z-20 border-[1px] !border-main-border !border-b-transparent transition-all duration-500 !border-r-transparent opacity-0 scale-0 origin-[90%_0%]  w-[10px] h-[10px] bg-secondary rotate-[45deg] -bottom-[6px] right-[15px]", {
          "scale-100 opacity-100": subMenu
        })}
        ></span>

        <ul className={classNames("absolute top-[42px] rounded-xl right-0 w-[180px] transition-all duration-500 opacity-0 scale-0 origin-[90%_0%] bg-secondary flex flex-col items-start justify-evenly gap-1 p-2", {
          "scale-100 opacity-100": subMenu
        })}
          style={{
            boxShadow: "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px"
          }}
        >
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg text-primary", {
            "bg-layout-secondary": lang == "En"
          })} onClick={() => { changeLangHandler("En") }}>
            <EnFlag />
            English</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg text-primary", {
            "bg-layout-secondary": lang == "Fr"
          })} onClick={() => { changeLangHandler("Fr") }}>
            <FrFlag />
            France</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg text-primary", {
            "bg-layout-secondary": lang == "Cn"
          })} onClick={() => { changeLangHandler("Cn") }}>
            <CnFlag />
            Chinese</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg text-primary", {
            "bg-layout-secondary": lang == "Vn"
          })} onClick={() => { changeLangHandler("Vn") }}>
            <VnFlag />
            Vietnamese</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg text-primary", {
            "bg-layout-secondary": lang == "Ar"
          })} onClick={() => { changeLangHandler("Ar") }}>
            <ArFlag />
            Arabic</li>

        </ul>
      </div>
    </div>
  )
}