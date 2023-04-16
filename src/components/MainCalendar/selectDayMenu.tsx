import React from "react";
import classNames from "classnames";

import CustomBtn from "components/shared/button/CustomBtn";
import useOnClickOutside from "hooks/useOnClickOutside";
import { SelectDayMenuTypes } from "types/selectDayMenuTypes"

export default function SelectDayMenu({
  isvisible,
  visiblestate,
  dayData,
}: SelectDayMenuTypes) {

  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  let ref = React.useRef<HTMLDivElement>(null!);
  let menuBackground = "#3788d8";
  let left = 0;
  let top = 0;
  let width = windowSize[0] >= 450 && windowSize[0] <= 639 ? 420 : 448
  let height = 517;

  if (dayData) {
    left = dayData.dayEl.getBoundingClientRect().x - width;
    top =
      dayData.dayEl.getBoundingClientRect().y
      - dayData.dayEl.getBoundingClientRect().y / 2

    if (dayData.dateStr.length > 10) {
      top = dayData.dayEl.firstChild?.firstChild?.firstChild?.getBoundingClientRect().y
        - dayData.dayEl.firstChild?.firstChild?.firstChild?.getBoundingClientRect().y / 2;
    }
  }

  useOnClickOutside(ref, () => {
    smoothClose();
  });

  const handelMenu = () => {

    if (dayData) {
      if (dayData.dayEl.getBoundingClientRect().x < width) {
        left =
          dayData.dayEl.getBoundingClientRect().x + dayData.dayEl.getBoundingClientRect().width
      }
      if (height - (dayData.dayEl.getBoundingClientRect().y - top) > windowSize[1] - dayData.dayEl.getBoundingClientRect().y && dayData.dateStr.length <= 10) {
        top = dayData.dayEl.getBoundingClientRect().y - height;

      }
      if (dayData.dateStr.length > 10) {
        if (height - (dayData.dayEl.firstChild?.firstChild?.firstChild?.getBoundingClientRect().y - top) > windowSize[1] - dayData.dayEl.firstChild?.firstChild?.firstChild?.getBoundingClientRect().y) {
          top = dayData.dayEl.firstChild?.firstChild?.firstChild?.getBoundingClientRect().y
            - height
        }
      }
      if (dayData.view.type === "timeGridDay") {
        console.log("done");
        left = dayData.dayEl.firstChild?.firstChild?.firstChild?.getBoundingClientRect().x
        console.log(left)

      }

      if (windowSize[0] - (dayData.dayEl.getBoundingClientRect().x + dayData.dayEl.getBoundingClientRect().width) < width && dayData.dayEl.getBoundingClientRect().x < width) {
        left = windowSize[0] / 2 - width / 2
        top = windowSize[1] / 2 - height / 2
      }
    }
  }

  handelMenu();

  function smoothClose() {
    ref.current.classList.remove("!opacity-100", "!translate-x-0");
    setTimeout(() => {
      visiblestate(false);
    }, 300);
  }

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    if (isvisible && ref.current) {
      ref.current.classList.add("!opacity-100", "!translate-x-0");
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };

  }, [isvisible]);

  return (
    isvisible && (
      <>
        <div
          className={classNames(
            "fixed left-0 top-0 w-full h-full bg-cyan-800/25 z-30",
            { hidden: !isvisible }
          )}
        ></div>
        <div
          ref={ref}
          style={{
            width: width,
            height: height,
            left: left,
            top: top,
            backgroundColor: menuBackground,
          }}
          className={classNames(
            `fixed flex flex-wrap items-start flex-wrap z-50 content-between w-[${width}px] h-[${height}px] top-0 p-8 pb-4 transition-all duration-500 translate-x-[60px] opacity-0 rounded-lg shadow-2xl left-0`
          )}
        >
          <div className="w-full">
            <h2 className="text-2xl ">{dayData.dateStr.slice(0, 10)}</h2>
            <h2 className="text-lg mb-4">{dayData.dateStr.slice(11, 19)}</h2>
          </div>
          <CustomBtn
            className={`ml-auto !block mb-4`}
            onClick={() => {
              smoothClose();
            }}
            style={{
              backgroundColor: menuBackground,
              boxShadow: `4px 4px 0 0 ${menuBackground}, 4px 4px 0 1px black`,
            }}
          >
            Close
          </CustomBtn>
        </div>
      </>
    )
  );
}
