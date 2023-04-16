import React, { useEffect } from "react";
import dynamic from "next/dynamic";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const SelectDayMenu = dynamic(() => import("./selectDayMenu"), {
  ssr: false,
});

const EventMenu = dynamic(() => import("./eventMenu"), {
  ssr: false,
});

const MainCalendar = () => {
  const [eventMenu, isVisible] = React.useState(false);
  const [eventData, setEventData]: any = React.useState(null);
  const [dayData, setDayData]: any = React.useState(null);
  const [selectDayMenu, openSelectDayMenu]: any = React.useState(false);
  const [calendarHandlerClass, setCalendarHandler]: any = React.useState("");


  const [events, changeEvents]: any = React.useState([
    {
      id: "1",
      title: "nice event",
      start: "2023-04-08 09:30",
      end: "2023-04-08 10:30",
      display: "block",
      backgroundColor: "red",
    },
    {
      id: "2",
      title: "nice event1",
      start: "2023-04-09 08:30",
      end: "2023-04-09 09:30",
      display: "block",
      backgroundColor: "green",
    },
    {
      id: "3",
      title: "nice event2",
      start: "2023-04-10 10:30",
      end: "2023-04-10 11:30",
      borderColor: "red",
    },
    {
      id: "4",
      title: "nice event3",
      start: "2023-04-11 11:30",
      end: "2023-04-11 12:30",
      borderColor: "green",
    },
    {
      id: "5",
      title: "nice event4",
      start: "2023-04-12 11:30",
      end: "2023-04-12 12:30",
      borderColor: "green",
    },
    {
      id: "6",
      title: "nice event5",
      start: "2023-04-13 11:30",
      end: "2023-04-13 12:30",
      borderColor: "green",
    },
    {
      id: "6",
      title: "nice event5",
      start: "2023-04-13 11:30",
      end: "2023-04-13 12:30",
      borderColor: "green",
    },
    {
      id: "6",
      title: "nice event5",
      start: "2023-04-13 11:30",
      end: "2023-04-13 12:30",
      borderColor: "green",
    },
    {
      id: "6",
      title: "nice event5",
      start: "2023-04-13 11:30",
      end: "2023-04-13 12:30",
      borderColor: "green",
    },
  ]);

  useEffect(() => {
    setCalendarHandler("max-w-full")
  }, [])
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
        dayCellClassNames={calendarHandlerClass}
        dayMaxEvents={true}
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
        events={events}
      />
    </>
  );
};

export default MainCalendar;
