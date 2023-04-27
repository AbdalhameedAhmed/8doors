import React from "react"
import classNames from "classnames"
import FullScreen from "assets/expand-solid.svg"
import SmallScreen from "assets/compress-solid.svg"

export default function SettingFooter() {
  const [fullScreen, isFullScreen] = React.useState(false)

  const changeScreenSize = ()=>{
    isFullScreen(!fullScreen)
  }
  return (
    <div className=" absolute bottom-0 left-0 w-full p-4">

      <button className="w-full h-[54px] border-[1px] border-[rgba(145,158,171,0.24)] rounded-xl flex items-center justify-center"
      onClick={()=>{changeScreenSize()}}
      >
        <p className={classNames("text-gray text-custom flex items-center gap-3",{"!text-primary":fullScreen})}>
          Full screen
          {fullScreen ? <SmallScreen className={("w-[20px] h-[20px] fill-primary")} /> : <FullScreen className="w-[20px] h-[20px] fill-[#637381]" />}
        </p>
      </button>
    </div>

  )
}