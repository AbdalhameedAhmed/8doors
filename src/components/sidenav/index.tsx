import React, { useRef } from "react";

import classNames from "classnames";

import useOnClickOutside from "hooks/useOnClickOutside";
import useWindowSize from "hooks/useWindowSize";
import { RenderMenuItems } from "./menuRenderer";
import {SideNavProps} from "types/sidenavTypes"

import Doctor from "../../assets/doctor.svg";


function SideNav({ toggle, setToggle, sideNavItems }: SideNavProps) {
  const { width } = useWindowSize();
  const ref = useRef(null);
  useOnClickOutside(ref, () => setToggle(false));
  return (
    <div
      className={classNames(
        "sidenav bg-secondary !z-30 shadow-2xl ease-in-out duration-300 relative"
      )}
      ref={ref}
      style={{
        width: width > 1184 || toggle ? "250px" : 0,
      }}
    >
      <div
        className="h-full overflow-y-auto scrollbar-hide width-auto p-[15px] transition-all ease-in-out duration-100 overflow-hidden"
        style={{ display: width > 1184 || toggle ? "block" : "none" }}
      >
        <div className={`h-[180px] w-full flex flex-col items-center justify-evenly border-b-1 border-white my-4`}>
          <div className={`bg-layout-secondary opacity-[0.7] flex justify-center items-center p-[10px] h-[90px] rounded-full`}>
            <Doctor style={{ width: 80, height: 80 }} />
          </div>
          <h2 className="text-center text-calendar">Dr. Dagi</h2>
          <h5 className="text-center text-calendar">Neurologist</h5>
        </div>
        <RenderMenuItems list={sideNavItems} />
      </div>
    </div>
  );
}

export default SideNav;
