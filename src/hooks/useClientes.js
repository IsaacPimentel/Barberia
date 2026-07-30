import { useEffect, useState } from "react";
import {
    getClientes,
    createCliente,
    updateCliente,
    deleteCliente
} from "../services/cliente.service";

const fallbackClientes = [
    { id: 1, name: "Juan Pérez", email: "juan.perez@example.com", phone: "987654321", notes: "Cliente frecuente" },
    { id: 2, name: "Ana Gómez", email: "ana.gomez@example.com", phone: "987123456", notes: "Prefiere cita por la tarde" },
    { id: 3, name: "Luis Díaz", email: "luis.diaz@example.com", phone: "987112233", notes: "VIP" }
];

function useClientes() {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchClientes();
    }, []);

    async function fetchClientes() {
        setLoading(true);
        try {
            const data = await getClientes();
            setClientes(Array.isArray(data) && data.length ? data : fallbackClientes);
        } catch (err) {
            setError(err);
            setClientes(fallbackClientes);
        } finally {
            setLoading(false);
        }
    }

    async function addCliente(cliente) {
        setLoading(true);
        try {
            const newCliente = await createCliente(cliente);
            setClientes((current) => [...current, newCliente]);
            return newCliente;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    async function editCliente(id, cliente) {
        setLoading(true);
        try {
            const updated = await updateCliente(id, cliente);
            setClientes((current) => current.map((item) => (item.id === id ? updated : item)));
            return updated;
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    async function removeCliente(id) {
        setLoading(true);
        try {
            await deleteCliente(id);
            setClientes((current) => current.filter((item) => item.id !== id));
        } catch (err) {
            setError(err);
            throw err;
        } finally {
            setLoading(false);
        }
    }

    return {
        clientes,
        loading,
        error,
        fetchClientes,
        addCliente,
        editCliente,
        removeCliente
    };
}

export default useClientes;
