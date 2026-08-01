import { useEffect, useState } from "react";
import {
    getServicios,
    createServicio,
    updateServicio,
    deleteServicio
} from "../services/servicio.service";

const fallbackServicios = [
    {
        id: 1,
        name: "Corte Clásico",
        category: "Cortes de Cabello",
        description: "Corte preciso y estilizado para un look definido.",
        price: 35,
        duration: 30,
        commissionValue: 30,
        commissionType: "percentage",
        color: "#f59e0b",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
        active: true,
        requiresAppointment: true
    },
    {
        id: 2,
        name: "Corte Fade",
        category: "Cortes de Cabello",
        description: "Degradado suave y moderno con definición en los laterales.",
        price: 45,
        duration: 35,
        commissionValue: 32,
        commissionType: "percentage",
        color: "#fb7185",
        image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=900&q=80",
        active: true,
        requiresAppointment: true
    },
    {
        id: 3,
        name: "Perfilado de Barba",
        category: "Barba",
        description: "Ajuste y perfilado detallado para una barba más limpia.",
        price: 25,
        duration: 20,
        commissionValue: 20,
        commissionType: "amount",
        color: "#22c55e",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80",
        active: true,
        requiresAppointment: true
    },
    {
        id: 4,
        name: "Lavado Premium",
        category: "Cabello",
        description: "Lavado con masaje capilar y producto de alta calidad.",
        price: 28,
        duration: 25,
        commissionValue: 15,
        commissionType: "percentage",
        color: "#3b82f6",
        image: "https://images.unsplash.com/photo-1499781350541-7783d4f6b23e?auto=format&fit=crop&w=900&q=80",
        active: true,
        requiresAppointment: false
    },
    {
        id: 5,
        name: "Corte Niño",
        category: "Niños",
        description: "Corte seguro y cómodo para los más pequeños.",
        price: 25,
        duration: 30,
        commissionValue: 18,
        commissionType: "percentage",
        color: "#8b5cf6",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
        active: true,
        requiresAppointment: true
    },
    {
        id: 6,
        name: "Tinte Completo",
        category: "Coloración",
        description: "Coloración completa con acabado profesional.",
        price: 120,
        duration: 90,
        commissionValue: 35,
        commissionType: "percentage",
        color: "#ef4444",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
        active: true,
        requiresAppointment: true
    },
    {
        id: 7,
        name: "Hidratación",
        category: "Tratamientos",
        description: "Tratamiento intensivo para recuperar brillo y suavidad.",
        price: 70,
        duration: 60,
        commissionValue: 25,
        commissionType: "percentage",
        color: "#14b8a6",
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80",
        active: true,
        requiresAppointment: true
    },
    {
        id: 8,
        name: "Corte + Barba",
        category: "Premium",
        description: "Paquete premium con corte y barba completo.",
        price: 80,
        duration: 60,
        commissionValue: 35,
        commissionType: "percentage",
        color: "#d97706",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
        active: true,
        requiresAppointment: true
    },
    {
        id: 9,
        name: "Limpieza Facial",
        category: "Facial",
        description: "Limpieza profunda para una piel renovada.",
        price: 60,
        duration: 45,
        commissionValue: 20,
        commissionType: "percentage",
        color: "#2563eb",
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
        active: false,
        requiresAppointment: true
    }
];

function useServicios() {
    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchServicios();
    }, []);

    async function fetchServicios() {
        setLoading(true);
        try {
            const data = await getServicios();
            setServicios(Array.isArray(data) && data.length ? data : fallbackServicios);
        } catch (err) {
            setError(err);
            setServicios(fallbackServicios);
        } finally {
            setLoading(false);
        }
    }

    async function addServicio(servicio) {
        setLoading(true);
        try {
            const newServicio = await createServicio(servicio);
            setServicios((current) => [...current, newServicio]);
            return newServicio;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    async function editServicio(id, servicio) {
        setLoading(true);
        try {
            const updated = await updateServicio(id, servicio);
            setServicios((current) => current.map((item) => (item.id === id ? updated : item)));
            return updated;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    async function removeServicio(id) {
        setLoading(true);
        try {
            await deleteServicio(id);
            setServicios((current) => current.filter((item) => item.id !== id));
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return {
        servicios,
        loading,
        error,
        fetchServicios,
        addServicio,
        editServicio,
        removeServicio
    };
}

export default useServicios;
