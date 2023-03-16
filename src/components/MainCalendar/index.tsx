import React from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import EventMenu from "./eventMenu"
const MainCalendar = () => {
  const [eventMenu, isVisible] = React.useState(false)
  const [eventData, changeEventData]: any = React.useState(null)

  return (
    <>
      <EventMenu isvisible={eventMenu} eventData={eventData} visiblestate={isVisible} />
      <FullCalendar
        eventClick={(ele) => { isVisible(true); changeEventData({ ...ele }) }}
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView='timeGridDay'
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        initialEvents={[
          { id: "1", title: 'nice event', start: "2023-03-01 10:30", display: "block", backgroundColor: "red" },
          { id: "2", title: 'nice event1', start: "2023-03-03 10:30", display: "block", backgroundColor: "green" },
          { id: "3", title: 'nice event2', start: "2023-03-05 10:30", borderColor: "red" },
          { id: "4", title: 'nice event3', start: "2023-03-08 10:30", borderColor: "green" },
          { id: "5", title: 'nice event4', start: "2023-03-10 10:30", display: "block" },
          { id: "6", title: 'nice event5', start: "2023-03-11 10:30", display: "block", backgroundColor: "green" }
        ]}
      />
    </>
  );
};

export default MainCalendar;
