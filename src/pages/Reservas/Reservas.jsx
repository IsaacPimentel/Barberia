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
        addAppointment,
        editAppointment
    } = useAppointments();

    const reservasEjemplo = [
        {
            id: 1,
            client: "Juan Pérez",
            service: "Corte clásico",
            barber: "Diego",
            status: "Confirmada",
            date: new Date().toISOString().slice(0, 10) + "T09:00",
            start: new Date().toISOString().slice(0, 10) + "T09:00",
            end: new Date().toISOString().slice(0, 10) + "T10:00",
            price: 70,
            notes: "Llegar 5 minutos antes"
        },
        {
            id: 2,
            client: "Ana Gómez",
            service: "Barba",
            barber: "Marta",
            status: "Pendiente",
            date: new Date().toISOString().slice(0, 10) + "T11:00",
            start: new Date().toISOString().slice(0, 10) + "T11:00",
            end: new Date().toISOString().slice(0, 10) + "T11:45",
            price: 55,
            notes: "Usar aceite especial"
        },
        {
            id: 3,
            client: "Luis Díaz",
            service: "Corte + Barba",
            barber: "Carlos",
            status: "Completada",
            date: new Date().toISOString().slice(0, 10) + "T14:00",
            start: new Date().toISOString().slice(0, 10) + "T14:00",
            end: new Date().toISOString().slice(0, 10) + "T15:30",
            price: 120,
            notes: "Cliente nuevo"
        },
        {
            id: 4,
            client: "María Ruiz",
            service: "Coloración",
            barber: "Sofía",
            status: "Confirmada",
            date: new Date().toISOString().slice(0, 10) + "T16:00",
            start: new Date().toISOString().slice(0, 10) + "T16:00",
            end: new Date().toISOString().slice(0, 10) + "T17:30",
            price: 150,
            notes: "Tinte oscuro"
        }
    ];

    const reservas = appointments.length ? appointments : reservasEjemplo;

    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const events = useMemo(
        () =>
            reservas.map((appointment) => ({
                id: appointment.id,
                title: `${appointment.client} - ${appointment.service}`,
                start: new Date(appointment.start || appointment.date),
                end: new Date(appointment.end || appointment.start || appointment.date),
                status: appointment.status || "Pendiente",
                client: appointment.client,
                barber: appointment.barber,
                notes: appointment.notes,
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
                        : "#f59e0b"
            })),
        [reservas]
    );

    const nextAppointments = useMemo(
        () =>
            reservas
                .slice()
                .sort((a, b) => new Date(a.date || a.start) - new Date(b.date || b.start))
                .slice(0, 4),
        [reservas]
    );

    const todayAppointments = useMemo(
        () => {
            const today = new Date().toISOString().slice(0, 10);
            return reservas.filter((appointment) =>
                (appointment.date || appointment.start || "").includes(today)
            );
        },
        [reservas]
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
        const appointment = appointments.find((item) => String(item.id) === String(event.id));
        if (appointment) {
            setSelectedAppointment(appointment);
            setModalOpen(true);
        }
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
                        <p>Agenda y administra tus reservas con el calendario.</p>
                    </div>
                    <button onClick={handleNewAppointment}>Nueva reserva</button>
                </header>

                <section className="reservas-dashboard-cards">
                    <div className="card">
                        <h2>Próximas reservas</h2>
                        <p>{nextAppointments.length}</p>
                    </div>
                    <div className="card">
                        <h2>Reservas del día</h2>
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
                        />
                    </div>
                    <aside className="reservas-sidebar">
                        <div className="sidebar-section">
                            <h3>Próximas reservas</h3>
                            {nextAppointments.map((appointment) => (
                                <AppointmentCard key={appointment.id} appointment={appointment} />
                            ))}
                        </div>
                        <div className="sidebar-section">
                            <h3>Estados</h3>
                            {Object.entries(STATUS_LABELS).map(([status, label]) => (
                                <div key={status} className="status-row">
                                    <AppointmentStatusChip status={status} />
                                    <span>{label}</span>
                                </div>
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

                {loading && <p>Cargando reservas...</p>}
                {error && <p>Error cargando reservas: {error.message || error.toString()}</p>}
            </div>
        </Layout>
    );
}

export default Reservas;
