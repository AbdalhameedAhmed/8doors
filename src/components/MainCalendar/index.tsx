import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useState } from "react"
import moment from 'moment'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Test from "./test"

const localizer = momentLocalizer(moment)
const DnDCalendar = withDragAndDrop(Calendar);
const MainCalendar = () => {
  let [events, setEvents] = useState([
    {
      id: 0,
      start: new Date("2 1 2023"),
      isAllDay: true,
      end: new Date("2 3 2023"),
      title: "title 1",
    },
    {
      id: 1,
      start: new Date("2 4 2023"),
      isAllDay: true,
      end: new Date("2 6 2023"),
      title: "title 2",
    },
    {
      id: 2,
      start: new Date("2 9 2023"),
      isAllDay: true,
      end: new Date("2 11 2023"),
      title: "title 3",
    },
    {
      id: 3,
      start: new Date("2 13 2023"),
      isAllDay: true,
      end: new Date("2 15 2023"),
      title: "title 4",
    },
    {
      id: 4,
      start: moment().add(5, "days").toDate(),
      end: moment()
        .add(6, "days")
        .toDate(),
      title: "i'm event"
    },
    {
      id: 5,
      start: new Date("2 17 2023"),
      end: new Date("2 19 2023"),
      title: "i'm event"
    },
    {
      id: 6,
      start: moment().add(8, "days").toDate(),
      end: moment()
        .add(9, "days")
        .toDate(),
      title: "Hello test"
    },
  ])



  function onEventDropHandler(data: any) {
    let eventsData = events
    eventsData.forEach(event => {
      if (event.id === data.event.id) {
        event.start = data.start
        event.end = data.end
      }
    })
    setEvents(eventsData)
  }






  return (

    <div className="MyCalendar">
      <DnDCalendar
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        localizer={localizer}
        onEventDrop={onEventDropHandler}
        resizable
        selectable={true}
        style={{ height: "100%" }}
      />
    </div>
  )



}

export default MainCalendar