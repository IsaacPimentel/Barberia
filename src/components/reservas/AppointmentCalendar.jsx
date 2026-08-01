import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import esLocale from "date-fns/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    es: esLocale
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

const messages = {
    next: "Sig",
    previous: "Ant",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento"
};

function AppointmentCalendar({ events = [], onEventClick }) {
    return (
        <div style={{ width: "100%", minHeight: 560 }} className="fc-wrapper">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 650 }}
                selectable
                views={["month", "week", "day", "agenda"]}
                defaultView="week"
                messages={messages}
                onSelectEvent={onEventClick}
                eventPropGetter={(event) => ({
                    style: {
                        backgroundColor: event.backgroundColor,
                        borderColor: event.borderColor,
                        color: "#ffffff"
                    }
                })}
            />
        </div>
    );
}

export default AppointmentCalendar;
