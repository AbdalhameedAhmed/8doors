import React from "react";
import classNames from "classnames";
import CustomBtn from "components/shared/button/CustomBtn";
import useOnClickOutside from "hooks/useOnClickOutside";

type props = {
  isvisible: boolean
  visiblestate: Function
  eventData: Object | any
}

export default function EventMenu({ isvisible, eventData, visiblestate }: props) {
  let ref = React.useRef<HTMLDivElement>(null!);
  let menuBackground = "";
  let left = 0;
  let top = 0;
  // let [width,setWidth] = React.useState(0)
  // let [height,setHeight] = React.useState(0)
  if (eventData) {
    menuBackground = eventData.event.backgroundColor
      ? eventData.event.backgroundColor
      : eventData.event.borderColor
        ? eventData.event.borderColor
        : "#3788d8";
    left = eventData.el.getBoundingClientRect().x;
    top =
      eventData.el.getBoundingClientRect().y +
      eventData.el.getBoundingClientRect().height;
  }
  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useOnClickOutside(ref, () => {
    smoothClose();
  });
  function handelMenu() {
    let width = 448;
    let height = 200;
    if (eventData) {
      if (windowSize[0] - eventData.el.getBoundingClientRect().x < width) {
        left =
          eventData.el.getBoundingClientRect().x -
          width +
          eventData.el.getBoundingClientRect().width;
      }
      if (windowSize[1] - eventData.el.getBoundingClientRect().y < height) {
        top = eventData.el.getBoundingClientRect().y - height;
      }
    }
  }
  function smoothClose() {
    ref.current.classList.remove("!opacity-100", "!translate-y-0");
    setTimeout(() => {
      visiblestate(false);
    }, 300);
  }
  handelMenu();
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    ref.current?.classList.add("!opacity-100", "!translate-y-0");

    window.addEventListener("resize", handleWindowResize);
    // console.log(ref.current?.getBoundingClientRect().width)
    // setWidth(ref.current?.getBoundingClientRect().width)
    // setHeight(ref.current?.getBoundingClientRect().height)
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isvisible]);

  return (
    <>
      {isvisible && (
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
              `fixed z-50 top-0 pl-4 pr-8 w-[448px] h-[197px] py-2 transition-all duration-500 -translate-y-full opacity-0 rounded-lg shadow-2xl left-0`
            )}
            style={{
              left: left,
              top: top,
              backgroundColor: menuBackground,
            }}
          >
            <h2 className="text-2xl">{eventData.event.title}</h2>
            <p>
              {eventData.event.endStr
                ? `${eventData.event.startStr.slice(
                  0,
                  10
                )} ${eventData.event.startStr.slice(
                  11,
                  16
                )} / ${eventData.event.endStr.slice(
                  0,
                  10
                )} ${eventData.event.endStr.slice(11, 16)}`
                : `${eventData.event.startStr.slice(
                  0,
                  10
                )} ${eventData.event.startStr.slice(11, 16)}`}
            </p>
            <p>At Time: {eventData.event.startStr.slice(11, 16)}</p>
            <CustomBtn
              className={`ml-auto !block mt-12 ]`}
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
      )}
    </>
  );
}
