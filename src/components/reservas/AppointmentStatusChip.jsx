function AppointmentStatusChip({ status }) {
    const colorMap = {
        Pendiente: "yellow",
        Confirmada: "green",
        Completada: "blue",
        Cancelada: "red"
    };

    return (
        <span className={`status-chip status-chip--${status.toLowerCase()}`}>
            {status}
        </span>
    );
}

export default AppointmentStatusChip;
