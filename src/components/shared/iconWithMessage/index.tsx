import React from "react"
import { useRouter } from "next/router";

import classNames from "classnames"
import { useDispatch } from "react-redux"
import { clearUser } from "redux/slices/auth"


import useOnClickOutside from "hooks/useOnClickOutside"
import { useCapitalizeFirstLetter } from "hooks/useCapitalizeFirstLetter";



function IconWithMessage({ visibleIcon, hoverIcon, message, goto }: any) {

  const router = useRouter();
  const dispatch = useDispatch();
  const [subMenu, openSubMenu] = React.useState(false)
  const menuRef = React.useRef(null)
  const capitalizeFirstLater = useCapitalizeFirstLetter()

  const menuHandler = () => {
    openSubMenu(!subMenu)
  }

  const clickOutsideHandler = () => {
    openSubMenu(false)
  }

  useOnClickOutside(menuRef, clickOutsideHandler)



  return (
    <div
      onClick={() => {
        menuHandler()
      }}
      className={classNames("p-1 rounded-full relative w-[45px] h-[45px] flex items-center justify-center hover:bg-layout-secondary", { "bg-layout-secondary": subMenu })}
      ref={menuRef}
    >

      <button className=" relative [&_svg]:w-[25px] group [&_svg]:fill-secondary [&_svg]:h-[25px] flex items-center">
        <div className={classNames("visible-icon block group-hover:hidden",{"!hidden":subMenu})}>{visibleIcon}</div>
        <div className={classNames("hover-icon hidden group-hover:block ",{"!block":subMenu})}>{hoverIcon}</div>
      </button>

      <span className={classNames("absolute z-20 border-[1px] !border-[rgba(145, 158, 171, 0.12)] border-b-transparent transition-all duration-500 border-r-transparent opacity-0 scale-0 origin-[90%_0%]  w-[10px] h-[10px] bg-white rotate-[45deg] -bottom-[6px] right-[15px]", {
        "scale-100 opacity-100": subMenu
      })}
      ></span>

      <div className={classNames("absolute top-[42px] shadow-lg bg-white rounded-xl right-0 w-[220px] transition-all duration-500 opacity-0 scale-0 origin-[90%_0%] max-h-[300px] overflow-y-scroll scrollbar-hide p-3", {
        "scale-100 opacity-100": subMenu
      })}
        style={{
          boxShadow: "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px"
        }}
      >

        <ul className={classNames("w-full max-h-full  flex flex-col items-start justify-evenly gap-1 "
        )}
        >

          <li
            className={classNames("flex gap-4 hover:bg-layout-secondary w-full p-1 cursor-pointer items-center justify-between rounded-lg",)}
            onClick={() => {
              router.push(goto)
              if (message == "Log Out") {
                dispatch(clearUser())
              }
            }}
          >
            <span className="px-2">
            {capitalizeFirstLater(message)}
            </span>
          </li>


        </ul>

      </div>
    </div>



  );
}
export default IconWithMessage;

