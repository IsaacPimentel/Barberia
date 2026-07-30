import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/classic/theme.css";

function AppointmentCalendar({ events = [], onEventClick, onEventDrop }) {
    return (
        <div style={{ width: "100%", minHeight: 560 }} className="fc-wrapper">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay" }}
                events={events}
                editable={true}
                selectable={true}
                views={{ dayGridMonth: { buttonText: "Mes" }, timeGridWeek: { buttonText: "Semana" }, timeGridDay: { buttonText: "Día" } }}
                height={650}
                eventClick={onEventClick}
                eventDrop={onEventDrop}
                eventAllow={() => true}
                eventClassNames={(arg) => {
                    const status = arg.event.extendedProps?.status;
                    if (status === "Pendiente") return "event-pending";
                    if (status === "Confirmada") return "event-confirmed";
                    if (status === "Completada") return "event-completed";
                    if (status === "Cancelada") return "event-cancelled";
                    return "";
                }}
            />
        </div>
    );
}

export default AppointmentCalendar;
