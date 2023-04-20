import React from "react"

import classNames from "classnames"

import EnFlag from "assets/ic_flag_en.svg"
import FrFlag from "assets/ic_flag_fr.svg"
import CnFlag from "assets/ic_flag_cn.svg"
import VnFlag from "assets/ic_flag_vn.svg"
import ArFlag from "assets/ic_flag_sa.svg"



export default function SelectLang() {
  const [subMenu, openSubMenu] = React.useState(false)
  const [lang, changeLang] = React.useState("En")

  const menuHandler = () => {
    openSubMenu(!subMenu)
  }
  const changeLangHandler = (langName: string) => {
    changeLang(langName)
  }
const flagChange = (langName:string)=>{
  switch (langName) {
    case "En":
      return (<EnFlag className="duration-300 hover:scale-105" />)
    case "Fr":
      return (<FrFlag className="duration-300 hover:scale-105" />)
    case "Cn":
      return (<CnFlag className="duration-300 hover:scale-105" />)
    case "Vn" :
      return (<VnFlag className="duration-300 hover:scale-105" />)
    case "Ar" :
      return (<ArFlag className="duration-300 hover:scale-105" />)
  }
}

  return (
    <div>
      <div className={classNames("p-1 rounded-full relative w-[45px] h-[45px] flex items-center justify-center hover:bg-layout-secondary", { "bg-layout-secondary": subMenu })}
        onClick={() => {
          menuHandler()
        }}>
          {
          flagChange(lang)
          }
        <ul className={classNames("absolute top-[50px] shadow-lg rounded-xl right-0 w-[180px] transition-all duration-500 opacity-0 scale-0 origin-[90%_0%] bg-white flex flex-col items-start justify-evenly gap-1 p-2", {
          "scale-100 opacity-100": subMenu
        })}>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg",{
            "bg-layout-secondary":lang=="En"
          })} onClick={() => {changeLangHandler("En")}}>
            <EnFlag />
            English</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg",{
            "bg-layout-secondary":lang=="Fr"
          })} onClick={() => { changeLangHandler("Fr") }}>
            <FrFlag />

            France</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg",{
            "bg-layout-secondary":lang=="Cn"
          })} onClick={() => { changeLangHandler("Cn") }}>
            <CnFlag />
            Chinese</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg",{
            "bg-layout-secondary":lang=="Vn"
          })} onClick={() => { changeLangHandler("Vn") }}>
            <VnFlag />
            Vietnamese</li>
          <li className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center rounded-lg",{
            "bg-layout-secondary":lang=="Ar"
          })} onClick={() => { changeLangHandler("Ar") }}>
            <ArFlag />
            Arabic</li>

        </ul>

      </div>

    </div>
  )
}