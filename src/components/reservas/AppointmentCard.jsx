import AppointmentStatusChip from "./AppointmentStatusChip";

function AppointmentCard({ appointment }) {
    return (
        <div className="appointment-card">
            <h3>{appointment.client || appointment.service || "Cita"}</h3>
            <p>{appointment.service || "Sin servicio"}</p>
            <p>{appointment.start || appointment.date || "Sin hora"}</p>
            <AppointmentStatusChip status={appointment.status || "Pendiente"} />
        </div>
    );
}

export default AppointmentCard;
