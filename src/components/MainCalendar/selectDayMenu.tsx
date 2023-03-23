import React from "react";
import classNames from "classnames";
import CustomBtn from "components/shared/button/CustomBtn";
import useOnClickOutside from "hooks/useOnClickOutside";

export default function SelectDayMenu({
  isvisible,
  visiblestate,
  dayData,
}: any) {
  let ref = React.useRef(null);
  let menuBackground = "#3788d8";
  let left = 0;
  let top = 0;

  if (dayData) {
    left = dayData.dayEl.getBoundingClientRect().x;
    top =
      dayData.dayEl.getBoundingClientRect().y +
      dayData.dayEl.getBoundingClientRect().height;
    console.log(dayData);
    if (dayData.dateStr.length > 10) {
      top = dayData.dayEl.firstChild?.firstChild?.firstChild?.getBoundingClientRect().y
        + dayData.dayEl.firstChild?.firstChild?.firstChild?.getBoundingClientRect().height;
    }
  }
  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useOnClickOutside(ref, () => {
    smoothClose();
  });
  function handelMenu() {
    let width = 161;
    let height = 136;

    if (dayData) {
      if (windowSize[0] - dayData.dayEl.getBoundingClientRect().x < width) {
        left =
          dayData.dayEl.getBoundingClientRect().x -
          width +
          dayData.dayEl.getBoundingClientRect().width;
      }
      if (windowSize[1] - dayData.dayEl.getBoundingClientRect().y < height) {
        top = dayData.dayEl.getBoundingClientRect().y - height;
      }
      if (dayData.dateStr.length > 10) {
        if (windowSize[1] - dayData.jsEvent.clientY < height) {
          top = dayData.jsEvent.clientY - height;
          top = dayData.dayEl.firstChild?.firstChild?.firstChild?.getBoundingClientRect().y
            - height
        }
      }
    }
  }
  handelMenu();
  function smoothClose() {
    ref.current.classList.remove("!opacity-100", "!translate-y-0");
    setTimeout(() => {
      visiblestate(false);
    }, 300);
  }
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    if (isvisible && ref.current) {
      ref.current.classList.add("!opacity-100", "!translate-y-0");
    }
    window.addEventListener("resize", handleWindowResize);
    console.log("ref is", ref);
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
          className={classNames(
            `fixed z-50 top-0 px-4 py-2 pb-4 transition-all duration-500 -translate-y-full opacity-0 rounded-lg shadow-2xl left-0`
          )}
          style={{
            left: left,
            top: top,
            backgroundColor: menuBackground,
          }}
        >
          <h2 className="text-2xl ">{dayData.dateStr.slice(0, 10)}</h2>
          <h2 className="text-lg mb-4">{dayData.dateStr.slice(11, 19)}</h2>
          <CustomBtn
            className={`ml-auto !block !mt-12]`}
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
