import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dynamic from "next/dynamic";
const EventMenu = dynamic(() => import("./eventMenu"), {
  ssr: false,
});
const SelectDayMenu = dynamic(() => import("./selectDayMenu"), {
  ssr: false,
});
const MainCalendar = () => {
  const [eventMenu, isVisible] = React.useState(false);
  const [eventData, setEventData]: any = React.useState(null);
  const [dayData, setDayData]: any = React.useState(null);
  const [selectDayMenu, openSelectDayMenu]: any = React.useState(false);

  const [events, changeEvents]: any = React.useState([
    {
      id: "1",
      title: "xDDDD",
      start: "2023-03-01 09:30",
      display: "block",
      backgroundColor: "red",
    },
    {
      id: "2",
      title: "nice event1",
      start: "2023-03-03 08:30",
      end: "2023-03-08 08:30",
      display: "block",
      backgroundColor: "green",
    },
    {
      id: "3",
      title: "nice event2",
      start: "2023-03-05 10:30",
      borderColor: "red",
    },
    {
      id: "4",
      title: "nice event3",
      start: "2023-03-08 11:30",
      borderColor: "green",
    },
    {
      id: "5",
      title: "nice event4",
      start: "2023-03-10 12:30",
      display: "block",
    },
    {
      id: "6",
      title: "nice event5",
      start: "2023-03-11 07:30",
      display: "block",
      backgroundColor: "green",
    },
  ]);

  return (
    <>
      <EventMenu
        isvisible={eventMenu}
        eventData={eventData}
        visiblestate={isVisible}
      />
      <SelectDayMenu
        isvisible={selectDayMenu}
        dayData={dayData}
        visiblestate={openSelectDayMenu}
      />
      <FullCalendar
        eventClick={(ele) => {
          isVisible(true);
          setEventData({ ...ele });
        }}
        dateClick={(info) => {
          setDayData(info);
          openSelectDayMenu(true);
        }}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="timeGridDay"
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        initialEvents={events}
      />
    </>
  );
};

export default MainCalendar;
