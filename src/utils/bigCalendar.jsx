import React, { useState } from 'react'; // Import and use React
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const BigCalendarComponent = ({ events }) => { 
  const [calendarEvents, setCalendarEvents] = useState(events); // Use useState

  // Example: Update events on any change to the 'events' prop
  useEffect(() => {
    setCalendarEvents(events); 
  }, [events]); 

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents} // Use the state variable
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default BigCalendarComponent;
