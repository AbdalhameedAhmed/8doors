import React from "react"

import classNames from "classnames"
import DownIcon from "assets/angle-down-solid.svg"

import useWindowSize from "hooks/useWindowSize";
import { useRouter } from "next/router";


type types = {
  items: { mainItem: string, subMenuItems: ({ title: string, path: string } | string)[] | string[] }
  direction?: "ltr" | "rtl"
}
export default function CollapsedMenu({ items, direction = "ltr" }: types) {
  const { width } = useWindowSize()
  const [menu, openMenu] = React.useState(false)
  const [ulHeight, setUlHeight] = React.useState(0)
  const ulRef = React.useRef(null)
  const router = useRouter()

  React.useEffect(() => {
    if (ulRef.current) {

      (ulRef.current as HTMLElement).style.height = width > 950 ? "auto" : menu && width < 950 ? `${items.subMenuItems.length * 62}` : "0";
    }
  }, [ulRef.current, width, menu]);


  const handelMenuOpen = () => {
    openMenu(!menu)

  }
  const handelClick = (path: string) => {
    router.push(path)
  }
  return (
    <a className={classNames("hover:text-theme-primary cursor-pointer relative group h-full flex items-center justify-center", { "w-full h-auto !block": width < 950 })}
      onClick={() => {
        handelMenuOpen()
      }}
    >
      <li className={classNames("flex relative items-center border-b-[1px] border-white gap-1", { "!justify-between w-full px-[20px] py-[15px]": width < 950 })}>
        {items.mainItem}
        <DownIcon className={`w-[15px] ${direction === "ltr" ? "ml-2" : "mr-2"} h-[15px] group-hover:fill-primary mt-[5px]`} />
      </li>
      <ul ref={ulRef} className={classNames("absolute top-[80px] -left-[0px] z-50 flex flex-col bg-white w-[200px] translate-y-[40px] opacity-0 transition-all duration-300 -z-10 group-hover:!translate-y-0 group-hover:!z-10 group-hover:!opacity-100", { "!relative !opacity-100 !translate-y-0 text-black group-hover:text-black !w-full !top-0 !overflow-hidden !bg-transparent": width < 950, "p-0": width < 950 && !menu, "!m-0 !w-full": width < 950 && menu, "shadow-[0_0_3px_rgb(0,0,0,0.1)]": width > 950 })} style={{
        height: width > 950 ? "auto" : menu && width < 950 ? items.subMenuItems.length * 62 : "0"
      }}>
        <span className={classNames("absolute z-20 border-[1px] !border-main-border !border-b-transparent transition-all duration-500 !border-r-transparent w-[14px] h-[14px] bg-white rotate-[45deg] -translate-y-1/2 left-[20px] !top-[0px]  !z-50", {
          "hidden": width < 950
        })}
        ></span>
        {
          items.subMenuItems.map((item, index) => (

            <li key={index} onClick={() => { handelClick(item.path ? item.path : "/landing1") }} className={classNames("border-b-[1px] group-hover:text-black w-full hover:pl-[20px] transition-all duration-300 hover:!text-theme-primary border-[rgb(240,240,240)] px-[15px] py-[10px] text-[14px]", { "mx-auto !px-[30px] py-[20px] !text-white": width < 950 })} >

              {item?.title ? item.title : item}
            </li>
          )
          )
        }
      </ul>
    </a>
  )
}