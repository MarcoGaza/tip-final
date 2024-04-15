import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';  // For week and day views
import listPlugin from '@fullcalendar/list';

const CalendarComponent = ({ events }) => {
  return (
    <>
      <style>
        {`
          .fc .fc-toolbar-button {
            background-color: yellow;
            color: black;
            border: 1px solid black;
          }
          .fc .fc-toolbar-button:hover {
            background-color: #ffcc00;  // A darker shade of yellow for hover
            color: black;
          }
        `}
      </style>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        }}
        events={events}
        eventContent={renderEventContent}
      />
    </>
  );
};

function renderEventContent(eventInfo) {
  const shadesOfYellow = ['#F9F871', '#F7F084', '#F9D773', '#FFD700', '#FFEA00'];
  const color = shadesOfYellow[eventInfo.event.id % shadesOfYellow.length];

  return (
    <div style={{ backgroundColor: color, padding: '10px', borderRadius: '5px' }}>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
      <p>{eventInfo.event.extendedProps.message}</p>
    </div>
  );
}

export default CalendarComponent;
