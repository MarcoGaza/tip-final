import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { findActiveEvents } from '~/utils/blog';

const localizer = momentLocalizer(moment);

const BigCalendarComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const activeEvents = await findActiveEvents();
                const formattedEvents = activeEvents.map(event => ({
                    title: event.title,
                    start: new Date(event.startDate),
                    end: new Date(event.endDate),
                    allDay: event.metadata?.allDay || false
                }));
                setEvents(formattedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};

export default BigCalendarComponent;
