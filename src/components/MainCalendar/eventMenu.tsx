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
  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  let ref = React.useRef<HTMLDivElement>(null!);
  let menuBackground = "";
  let height = 190;
  let left = 0;
  let top = 0;
  let width = windowSize[0] >= 450 && windowSize[0] <= 639 ? 420 : 448 

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

  useOnClickOutside(ref, () => {
    smoothClose();
  });

  const handelMenu = ()=> {
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
      if(windowSize[0] - eventData.el.getBoundingClientRect().x < width && eventData.el.getBoundingClientRect().x +
      eventData.el.getBoundingClientRect().width<width){
      left=windowSize[0]/2 - width/2
      top = 100
      } 
    }
  }
  const smoothClose =() => {
    ref.current.classList.remove( `!max-h-[200px]`,"py-2");
    setTimeout(() => {
      visiblestate(false);
    }, 300);
  }

  handelMenu();

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    ref.current?.classList.add( `!max-h-[200px]`,"py-2");

    window.addEventListener("resize", handleWindowResize);
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
            style={{
              width:width,
              height:height,
              left: left,
              top: top,
              backgroundColor: menuBackground,
            }}
            className={classNames(
              `fixed z-50 top-0 px-5 transition-all max-h-0 overflow-hidden  duration-[500ms] rounded-lg shadow-2xl left-0`
            )}
            
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
            <div className="flex justify-end items-center mt-12 pr-[5px] pb-[10px]">
            <CustomBtn
              className={`!block `}
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
          </div>
        </>
      )}
    </>
  );
}
