import React from "react"
import classNames from "classnames"

import useOnClickOutside from "hooks/useOnClickOutside"
import { CSSProperties } from "theme-ui"


type customMenuType = {

  icon: React.ReactNode;
  children: React.ReactNode
  containerStyle?: string
  whenMenuOpened?: () => void
  clickOutSide?: () => void
  iconContainer?: string
  style?: CSSProperties
}



export default function CustomMenu({ children, icon, containerStyle, whenMenuOpened = () => { }, clickOutSide = () => { }, iconContainer, style }: customMenuType) {

  const [subMenu, openSubMenu] = React.useState(false)
  const menuRef = React.useRef(null)
  const [thumb, setShowThumb] = React.useState(false)

  const menuHandler = () => {
    openSubMenu(!subMenu)
    whenMenuOpened()
  }


  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = event.target as HTMLDivElement;
    if (element.scrollHeight > element.clientHeight) {
      setShowThumb(true);
      setTimeout(() => setShowThumb(false), 500);
    }
  }


  const clickOutsideHandler = () => {
    openSubMenu(false)
    clickOutSide()
  }

  useOnClickOutside(menuRef, clickOutsideHandler)

  return (
    <div className={classNames("p-1 rounded-full z-10 relative w-[45px] h-[45px] flex items-center justify-center hover:bg-layout-secondary", { "bg-layout-secondary": subMenu }, iconContainer)} onClick={() => {
      menuHandler()
    }}
      ref={menuRef}
    >
      {icon}
      <span className={classNames("absolute z-20 border-[1px] !border-main-border !border-b-transparent transition-all duration-500 !border-r-transparent opacity-0 scale-0 origin-[90%_0%]  w-[10px] h-[10px] bg-secondary rotate-[45deg] -bottom-[6px] right-[15px]", {
        "scale-100 opacity-100": subMenu
      })}
      ></span>
      <div className={classNames("absolute top-[42px] shadow-lg bg-white rounded-xl right-0 w-[220px] transition-all duration-500 opacity-0 scale-0 origin-[90%_0%] max-h-[300px] overflow-y-scroll snap-y snap-center bg-secondary scrollbar-custom p-3", {
        "scale-100 opacity-100": subMenu, "showScroll": thumb
      }, containerStyle)}
        style={{
          boxShadow: "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px", ...style
        }}
        onScroll={(event) => { handleScroll(event) }}
      >

        {children}

      </div>
    </div>
  )


}