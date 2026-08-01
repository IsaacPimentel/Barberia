import { useEffect, useState } from "react";
import {
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
} from "../services/appointment.service";

const fallbackAppointments = [
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

function useAppointments() {
    const [appointments, setAppointments] = useState(fallbackAppointments);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchAppointments();
    }, []);

    async function fetchAppointments() {
        setLoading(true);
        try {
            const data = await getAppointments();
            setAppointments(Array.isArray(data) && data.length ? data : fallbackAppointments);
        } catch (err) {
            setError(err);
            setAppointments(fallbackAppointments);
        } finally {
            setLoading(false);
        }
    }

    async function addAppointment(appointment) {
        setLoading(true);
        try {
            const newAppointment = await createAppointment(appointment);
            setAppointments((current) => [...current, newAppointment]);
            return newAppointment;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    async function editAppointment(id, appointment) {
        setLoading(true);
        try {
            const updated = await updateAppointment(id, appointment);
            setAppointments((current) => current.map((item) => item.id === id ? updated : item));
            return updated;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    async function removeAppointment(id) {
        setLoading(true);
        try {
            await deleteAppointment(id);
            setAppointments((current) => current.filter((item) => item.id !== id));
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return {
        appointments,
        loading,
        error,
        fetchAppointments,
        addAppointment,
        editAppointment,
        removeAppointment
    };
}

export default useAppointments;
