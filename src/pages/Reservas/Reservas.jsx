import { useMemo, useState } from "react";
import Layout from "../../components/layout/Layout";
import AppointmentCalendar from "../../components/reservas/AppointmentCalendar";
import AppointmentModal from "../../components/reservas/AppointmentModal";
import AppointmentCard from "../../components/reservas/AppointmentCard";
import AppointmentStatusChip from "../../components/reservas/AppointmentStatusChip";
import useAppointments from "../../hooks/useAppointments";

const STATUS_LABELS = {
    Pendiente: "🟡 Pendiente",
    Confirmada: "🟢 Confirmada",
    Completada: "🔵 Completada",
    Cancelada: "🔴 Cancelada"
};

function Reservas() {
    const {
        appointments,
        loading,
        error,
        fetchAppointments,
        addAppointment,
        editAppointment,
        removeAppointment
    } = useAppointments();

    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const events = useMemo(
        () =>
            appointments.map((appointment) => ({
                id: appointment.id,
                title: `${appointment.client} - ${appointment.service}`,
                start: appointment.date || appointment.start,
                end: appointment.end || appointment.date || appointment.start,
                backgroundColor:
                    appointment.status === "Confirmada"
                        ? "#16a34a"
                        : appointment.status === "Completada"
                        ? "#2563eb"
                        : appointment.status === "Cancelada"
                        ? "#dc2626"
                        : "#f59e0b",
                borderColor:
                    appointment.status === "Confirmada"
                        ? "#16a34a"
                        : appointment.status === "Completada"
                        ? "#2563eb"
                        : appointment.status === "Cancelada"
                        ? "#dc2626"
                        : "#f59e0b",
                extendedProps: {
                    status: appointment.status || "Pendiente",
                    client: appointment.client,
                    barber: appointment.barber,
                    notes: appointment.notes
                }
            })),
        [appointments]
    );

    const nextAppointments = useMemo(
        () =>
            appointments
                .slice()
                .sort((a, b) => new Date(a.date || a.start) - new Date(b.date || b.start))
                .slice(0, 4),
        [appointments]
    );

    const todayAppointments = useMemo(
        () => {
            const today = new Date().toISOString().slice(0, 10);
            return appointments.filter((appointment) =>
                (appointment.date || appointment.start || "").includes(today)
            );
        },
        [appointments]
    );

    const busyBarbers = useMemo(
        () =>
            Array.from(new Set(
                todayAppointments.map((appointment) => appointment.barber).filter(Boolean)
            )).length,
        [todayAppointments]
    );

    const todayIncome = useMemo(
        () =>
            todayAppointments.reduce((sum, appointment) => sum + Number(appointment.price || 0), 0),
        [todayAppointments]
    );

    function handleEventClick(event) {
        const appointment = appointments.find((item) => String(item.id) === String(event.event.id));
        if (appointment) {
            setSelectedAppointment(appointment);
            setModalOpen(true);
        }
    }

    async function handleEventDrop(info) {
        const appointment = appointments.find((item) => String(item.id) === String(info.event.id));
        if (!appointment) return;

        await editAppointment(appointment.id, {
            ...appointment,
            date: info.event.start.toISOString(),
            start: info.event.start.toISOString(),
            end: info.event.end ? info.event.end.toISOString() : info.event.start.toISOString()
        });
    }

    function handleNewAppointment() {
        setSelectedAppointment(null);
        setModalOpen(true);
    }

    async function handleSave(event) {
        event.preventDefault();
        const form = event.target;
        const data = {
            client: form.client.value,
            service: form.service.value,
            barber: form.barber.value,
            date: form.time.value,
            start: form.time.value,
            notes: form.notes.value,
            status: selectedAppointment?.status || "Pendiente",
            price: selectedAppointment?.price || 0
        };

        if (selectedAppointment) {
            await editAppointment(selectedAppointment.id, { ...selectedAppointment, ...data });
        } else {
            await addAppointment(data);
        }

        setModalOpen(false);
    }

    function handleCloseModal() {
        setSelectedAppointment(null);
        setModalOpen(false);
    }

    return (
        <Layout>
            <div className="reservas-page">
                <header className="reservas-page__header">
                    <div>
                        <h1>Reservas</h1>
                        <p>Agenda y administra tus citas con el calendario.</p>
                    </div>
                    <button onClick={handleNewAppointment}>Nueva cita</button>
                </header>

                <section className="reservas-dashboard-cards">
                    <div className="card">
                        <h2>Próximas citas</h2>
                        <p>{nextAppointments.length}</p>
                    </div>
                    <div className="card">
                        <h2>Agenda del día</h2>
                        <p>{todayAppointments.length}</p>
                    </div>
                    <div className="card">
                        <h2>Barberos ocupados</h2>
                        <p>{busyBarbers}</p>
                    </div>
                    <div className="card">
                        <h2>Ingresos del día</h2>
                        <p>${todayIncome.toFixed(2)}</p>
                    </div>
                </section>

                <section className="reservas-page__main">
                    <div className="reservas-calendar">
                        <AppointmentCalendar
                            events={events}
                            onEventClick={handleEventClick}
                            onEventDrop={handleEventDrop}
                        />
                    </div>
                    <aside className="reservas-sidebar">
                        <div className="sidebar-section">
                            <h3>Próximas citas</h3>
                            {nextAppointments.map((appointment) => (
                                <AppointmentCard key={appointment.id} appointment={appointment} />
                            ))}
                        </div>
                        <div className="sidebar-section">
                            <h3>Estados</h3>
                            {Object.entries(STATUS_LABELS).map(([status, label]) => (
                                <AppointmentStatusChip key={status} status={status} />
                            ))}
                        </div>
                        <div className="sidebar-section">
                            <h3>Detalles del día</h3>
                            {todayAppointments.map((appointment) => (
                                <div key={appointment.id} className="appointment-summary">
                                    <strong>{appointment.client}</strong>
                                    <p>{appointment.service}</p>
                                    <AppointmentStatusChip status={appointment.status || "Pendiente"} />
                                </div>
                            ))}
                        </div>
                    </aside>
                </section>

                {modalOpen && (
                    <AppointmentModal
                        appointment={selectedAppointment}
                        onClose={handleCloseModal}
                        onSubmit={handleSave}
                    />
                )}

                {loading && <p>Cargando citas...</p>}
                {error && <p>Error cargando citas: {error.message || error.toString()}</p>}
            </div>
        </Layout>
    );
}

export default Reservas;
