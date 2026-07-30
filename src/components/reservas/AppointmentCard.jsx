function AppointmentCard({ appointment }) {
    return (
        <div className="appointment-card">
            <h3>{appointment.title}</h3>
            <p>{appointment.start}</p>
            <p>{appointment.status}</p>
        </div>
    );
}

export default AppointmentCard;
