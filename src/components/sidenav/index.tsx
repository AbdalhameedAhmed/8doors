import React, { useRef } from "react";

import classNames from "classnames";

import useOnClickOutside from "hooks/useOnClickOutside";
import useWindowSize from "hooks/useWindowSize";
import { RenderMenuItems } from "./menuRenderer";
import { SideNavProps } from "types/sidenavTypes"

import LeftArrow from "assets/left-arrow.svg"
import RightArrow from "assets/right-arrow.svg"


function SideNav({ toggle, setToggle, sideNavItems, smallView, changeSmallView }: SideNavProps) {

  // const [smallView, changeSmallView] = React.useState(false)
  const { width } = useWindowSize();
  const ref = useRef(null);
  useOnClickOutside(ref, () => setToggle(false));

  const smallViewHandler = () => {
    changeSmallView(!smallView)
  }

  React.useEffect(() => {
    width < 1184 && changeSmallView(false)
  }, [width, smallView])

  return (
    <div
      className={classNames(
        "sidenav bg-secondary !z-30 ease-in-out duration-300 border-r border-[rgba(145, 158, 171, 0.24)] border-dashed",
      )}
      ref={ref}
      style={{
        width: (width > 1184 && !smallView) || (width < 1184 && toggle) ? "250px" : (width > 1184 && smallView) ? "100px" : "0",
        position: width > 1184 ? "relative" : "fixed",
      }}
    >

      <div
        className="h-full scrollbar-hide w-full transition-all ease-in-out duration-100 relative"
        style={{ display: width > 1184 || toggle ? "block" : "none" }}
      >

        <div className={`w-full flex flex-col items-center justify-evenly border-b-1 h-[80px] relative border-white mb-3`}>

          <p className={classNames("text-logo text-4xl font-bold transition-all duration-300", { "!text-[20px]": smallView })}>8doors</p>

          <button className=" absolute right-[0px] top-1/2 translate-x-1/2 -translate-y-1/2 border border-[rgba(145, 158, 171, 0.24)] border-dashed rounded-full flex items-center justify-center z-10 w-[30px] h-[30px] bg-[#ffffff82] backdrop-blur-[5px]" onClick={() => { smallViewHandler() }}
            style={{
              display: width > 1184 ? "flex" : "none",
            }}
          >

            <div className="rounded-full ">
              {
                smallView ? (
                  <RightArrow className="w-[12px] h-[12px] !fill-secondary" />
                ) : (
                  <LeftArrow className="w-[12px] h-[12px] !fill-secondary " />
                )
              }
            </div>

          </button>

        </div>
        {
          <RenderMenuItems list={sideNavItems} smallView={smallView} />
        }

      </div>
    </div>
  );
}

export default SideNav;
