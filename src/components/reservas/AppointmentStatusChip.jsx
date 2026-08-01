function AppointmentStatusChip({ status }) {
    return (
        <span className={`status-chip status-chip--${status.toLowerCase()}`}>
            {status}
        </span>
    );
}

export default AppointmentStatusChip;
