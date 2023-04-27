import React from "react"
import Light from "assets/sun-solid.svg"
import Dark from "assets/moon-solid.svg"
import classNames from "classnames"



type ModeTypes = {
  theme:string;
  changeTheme:(theme:string)=>void
}
export default function Mode ({theme,changeTheme}:ModeTypes) {


  return (
    <div className="flex flex-col gap-3 mb-5">
    <p className="text-[0.75rem] font-[600] text-secondary">Mode</p>
    <div className="flex justify-between items-center w-full">
      <button className="w-[106px] h-[70px] border-[1px] border-[rgba(145,158,171,0.24)] rounded-xl flex items-center justify-center"
        onClick={() => { changeTheme("") }}
      >
        <Light className={classNames("w-[20px] h-[20px] fill-secondary", { "fill-primary": theme === "" })} />
      </button>

      <button className="w-[106px] h-[70px] border-[1px] border-[rgba(145,158,171,0.24)] rounded-xl flex items-center justify-center"
        onClick={() => { changeTheme("dark") }}
      >
        <Dark className={classNames("w-[20px] h-[20px] fill-secondary", { "fill-primary": theme === "dark" })} />
      </button>
    </div>
  </div>

  )
}