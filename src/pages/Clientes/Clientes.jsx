import { useState } from "react";
import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import Layout from "../../components/layout/Layout";
import useClientes from "../../hooks/useClientes";
import ClientesTable from "../../components/clientes/ClientesTable";
import ClienteModal from "../../components/clientes/ClienteModal";

function Clientes() {
    const { clientes, loading, error, addCliente, editCliente, removeCliente } = useClientes();
    const [modalOpen, setModalOpen] = useState(false);
    const [editingCliente, setEditingCliente] = useState(null);

    function handleOpenNew() {
        setEditingCliente(null);
        setModalOpen(true);
    }

    function handleOpenEdit(cliente) {
        setEditingCliente(cliente);
        setModalOpen(true);
    }

    async function handleSubmitCliente(data) {
        if (editingCliente) {
            await editCliente(editingCliente.id, data);
        } else {
            await addCliente(data);
        }
        setModalOpen(false);
    }

    async function handleDelete(cliente) {
        if (window.confirm(`Eliminar cliente ${cliente.name}?`)) {
            await removeCliente(cliente.id);
        }
    }

    return (
        <Layout>
            <Box sx={{ color: "white", display: "grid", gap: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <div>
                        <Typography variant="h4">Clientes</Typography>
                        <Typography sx={{ color: "#94a3b8" }}>Administra los clientes y su información de contacto.</Typography>
                    </div>
                    <Button variant="contained" onClick={handleOpenNew} sx={{ px: 2, py: 1, minWidth: 140, fontSize: 14 }}>
                        Nuevo cliente
                    </Button>
                </Stack>

                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
                        <CircularProgress color="inherit" />
                    </Box>
                ) : error ? (
                    <Typography sx={{ color: "#f87171" }}>Error al cargar clientes.</Typography>
                ) : (
                    <ClientesTable clientes={clientes} onEdit={handleOpenEdit} onDelete={handleDelete} />
                )}

                <ClienteModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleSubmitCliente}
                    cliente={editingCliente}
                />
            </Box>
        </Layout>
    );
}

export default Clientes;
