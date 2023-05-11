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
  const [lang, changeLang] = React.useState("en")
  const menuRef = React.useRef(null)



  const menuHandler = () => {
    openSubMenu(!subMenu)
  }
  const outSideHandler = () => {
    openSubMenu(false)

  }
  const changeLangHandler = (langName: string) => {
    document?.querySelector('html')?.setAttribute('dir', langName==="ar"?"rtl":"ltr");
    document?.querySelector('html')?.setAttribute('lang', langName);
    changeLang(langName)
  }

  useOnClickOutside(menuRef, outSideHandler)

  const flagChange = (langName: string) => {

    switch (langName) {
      case "en":
        return (<EnFlag className="duration-300 hover:scale-105" />)
      case "fr":
        return (<FrFlag className="duration-300 hover:scale-105" />)
      case "cn":
        return (<CnFlag className="duration-300 hover:scale-105" />)
      case "vn":
        return (<VnFlag className="duration-300 hover:scale-105" />)
      case "ar":
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
            "bg-layout-secondary": lang == "en"
          })} onClick={() => { changeLangHandler("en") }}>
            <EnFlag />
            English</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg text-primary", {
            "bg-layout-secondary": lang == "fr"
          })} onClick={() => { changeLangHandler("fr") }}>
            <FrFlag />
            France</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg text-primary", {
            "bg-layout-secondary": lang == "cn"
          })} onClick={() => { changeLangHandler("cn") }}>
            <CnFlag />
            Chinese</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg text-primary", {
            "bg-layout-secondary": lang == "vn"
          })} onClick={() => { changeLangHandler("vn") }}>
            <VnFlag />
            Vietnamese</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg text-primary", {
            "bg-layout-secondary": lang == "ar"
          })} onClick={() => { changeLangHandler("ar") }}>
            <ArFlag />
            Arabic</li>

        </ul>
      </div>
    </div>
  )
}