import AppointmentForm from "./AppointmentForm";

function AppointmentModal({ appointment, onClose, onSubmit }) {
    return (
        <div className="appointment-modal">
            <div className="appointment-modal__content">
                <button className="appointment-modal__close" onClick={onClose}>
                    ×
                </button>
                <h2>{appointment ? "Editar cita" : "Nueva cita"}</h2>
                <AppointmentForm onSubmit={onSubmit} appointment={appointment} />
            </div>
        </div>
    );
}

export default AppointmentModal;
