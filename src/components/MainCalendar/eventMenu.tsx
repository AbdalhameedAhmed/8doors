import React from "react";
import classNames from "classnames";
import CustomBtn from "components/shared/button/CustomBtn";
import useOnClickOutside from "hooks/useOnClickOutside";
export default function EventMenu({ isvisible, eventData, visiblestate }: any) {
  let ref = React.useRef(null);
  let menuBackground = "";
  if (eventData) {
    menuBackground = eventData.event.backgroundColor
      ? eventData.event.backgroundColor
      : eventData.event.borderColor
      ? eventData.event.borderColor
      : "#3788d8";
  }
  useOnClickOutside(ref, () => {
    visiblestate(false);
  });
  return (
    <>
      {eventData && (
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
              `fixed z-50 top-0 pl-4 pr-8  py-2 rounded shadow-2xl hidden left-0`,
              { "!block": isvisible }
            )}
            style={{
              left: eventData.jsEvent.clientX - eventData.jsEvent.layerX,
              top: eventData.jsEvent.clientY - eventData.jsEvent.layerY + 23,
              backgroundColor: menuBackground,
            }}
          >
            <h2>Event Name: {eventData.event.title}</h2>
            <p>Start At: {eventData.event.startStr.slice(0, 10)}</p>
            <p>At Time: {eventData.event.startStr.slice(11, 16)}</p>
            <CustomBtn
              className={`ml-auto !block mb-4 mt-8 ]`}
              onClick={() => {
                visiblestate(false);
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
