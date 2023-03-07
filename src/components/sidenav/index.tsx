import useOnClickOutside from "hooks/useOnClickOutside";
import useWindowSize from "hooks/useWindowSize";
import React, { useRef } from "react";
import styles from "./style.module.css";
import Doctor from "../../assets/doctor.svg";
import { mainMenuItems } from "./utils";
import { RenderMenuItems } from "./menuRenderer";
import classNames from "classnames";
type SideNavProps = {
  toggle: boolean;
  setToggle: Function;
};

function SideNav({ toggle, setToggle }: SideNavProps) {
  const { width } = useWindowSize();
  const ref = useRef(null);
  useOnClickOutside(ref, () => setToggle(false));
  return (
    <div
      className={classNames(
        "sidenav bg-secondary !z-30 shadow-2xl relative ease-in-out duration-300"
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
        <div className={`${styles.doctorProfile} my-4`}>
          <div className={`${styles.imgContainer} rounded-full`}>
            <Doctor style={{ width: 80, height: 80 }} />
          </div>
          <h2 className="text-center text-calendar">Dr. Dagi</h2>
          <h5 className="text-center text-calendar">Neurologist</h5>
        </div>
        <RenderMenuItems list={mainMenuItems} />
      </div>
    </div>
  );
}

export default SideNav;
