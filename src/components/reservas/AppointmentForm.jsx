function AppointmentForm({ onSubmit, appointment }) {
    return (
        <form onSubmit={onSubmit} className="appointment-form">
            <label>
                Cliente
                <input name="client" defaultValue={appointment?.client || ""} required />
            </label>
            <label>
                Servicio
                <input name="service" defaultValue={appointment?.service || ""} required />
            </label>
            <label>
                Barbero
                <input name="barber" defaultValue={appointment?.barber || ""} required />
            </label>
            <label>
                Hora
                <input name="time" defaultValue={appointment?.date || appointment?.start || ""} type="datetime-local" required />
            </label>
            <label>
                Estado
                <select name="status" defaultValue={appointment?.status || "Pendiente"}>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Confirmada">Confirmada</option>
                    <option value="Completada">Completada</option>
                    <option value="Cancelada">Cancelada</option>
                </select>
            </label>
            <label>
                Precio
                <input name="price" defaultValue={appointment?.price || 0} type="number" min="0" />
            </label>
            <label>
                Observaciones
                <textarea name="notes" defaultValue={appointment?.notes || ""} />
            </label>
            <button type="submit">Guardar</button>
        </form>
    );
}

export default AppointmentForm;
