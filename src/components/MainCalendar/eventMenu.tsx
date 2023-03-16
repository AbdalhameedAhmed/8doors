import React from "react"
import classNames from "classnames"
import CustomBtn from "components/shared/button/CustomBtn"
import useOnClickOutside from "hooks/useOnClickOutside"
export default function EventMenu({ isvisible, eventData, visiblestate }: any) {
      let ref = React.useRef(null)
      useOnClickOutside(ref, () => { visiblestate(false) })
      return (
            eventData &&
            <div ref={ref} className={classNames(`fixed z-50 bg-primary top-0 pl-4 pr-8  py-2 rounded shadow-2xl hidden left-0`, { "!block": isvisible })} style={{ left: eventData.jsEvent.clientX - eventData.jsEvent.layerX, top: eventData.jsEvent.clientY - eventData.jsEvent.layerY + 30 }}>
                  <h2>Event Name: {eventData.event.title}</h2>
                  <p>Start At: {eventData.event.startStr.slice(0, 10)}</p>
                  <p>At Time: {eventData.event.startStr.slice(11, 16)}</p>
                  <CustomBtn className="ml-auto !block mb-4 mt-8" onClick={() => { visiblestate(false) }}>
                        Close
                  </CustomBtn>

            </div>)
}